"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { Client } = require("pg"); // Using CommonJS syntax
// Async function to fetch user data from the database given an email
const client = new Client({
    // connectionString:"postgresql://postgres:myscecretpassword@localhost/postgres"
    host: "localhost",
    port: 5433,
    database: "postgres",
    user: "postgres",
    password: "myscecretpassword",
});
// creating a table
function createUsersTable(table_name) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const result = yield client.query(`
      CREATE TABLE ${table_name} (
        id SERIAL PRIMARY KEY,
        username VARCHAR(58) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,

        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `);
            console.log(result);
        }
        catch (error) {
            console.error("Error creating table:", error);
        }
        finally {
            yield client.end(); // Close the connection
        }
    });
}
// insertion in a table
function insertion(table_name, uname, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`INSERT INTO ${table_name} (username, email, password)VALUES ('${uname}', '${email}', '${password}')`);
    });
}
// transaction
function insertUserAndAddress(username, email, password, city, country, street, pincode) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            // Start transaction
            yield client.query("BEGIN");
            // Insert user
            const insertUserText = `
          INSERT INTO users (username, email, password)
          VALUES ($1, $2, $3)
          RETURNING id;
      `;
            const userRes = yield client.query(insertUserText, [
                username,
                email,
                password,
            ]);
            const userId = userRes.rows[0].id;
            // Insert address using the returned user ID
            const insertAddressText = `
          INSERT INTO addresses (user_id, city, country, street, pincode)
          VALUES ($1, $2, $3, $4, $5);
      `;
            yield client.query(insertAddressText, [
                userId,
                city,
                country,
                street,
                pincode,
            ]);
            // Commit transaction
            yield client.query("COMMIT");
            console.log("User and address inserted successfully");
        }
        catch (err) {
            yield client.query("ROLLBACK"); // Roll back the transaction on error
            console.error("Error during transaction, rolled back.", err);
            throw err;
        }
        finally {
            yield client.end(); // Close the client connection
        }
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // createUsersTable("table1");
        // await insertion("vikdwdwdwash", "viwdwdwkash@gmail.com", "myscecret")
        // .then(
        //   () => console.log("inserted successfully")
        // )
        insertUserAndAddress("ironman", "ironman@mark4.com", "stark", "california", "USA", "mountain-hills", "281001");
    });
}
main();
