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
    // neon console
    // connectionString:"postgresql://vikashTest_owner:WlG2eEIvk3dK@ep-shy-fog-a5znbd5b.us-east-2.aws.neon.tech/vikashTest?sslmode=require"
    // for local host
    host: "localhost",
    port: 5432,
    database: "postgres",
    user: "postgres",
    password: "vikash",
});
function createUsersTable() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const result = yield client.query(`

         CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(58) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      ),
   

      CREATE TABLE addresses(
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL,
        city VARCHAR(100) NOT NULL,
        country VARCHAR(100) NOT NULL,
        street VARCHAR(255) NOT NULL,
        pincode VARCHAR(20),
        FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
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
// insert into users table
function insertIntoTable() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const result = yield client.query(`
      INSERT INTO users(username, email, password)
      VALUES('XYZ', 'XYZ@gmail.com', 'XYZ.12');
      `);
            console.log(result);
        }
        catch (error) {
            console.error("Error inserting into table:", error);
        }
        finally {
            yield client.end(); // Close the connection
        }
    });
}
// Reading Table Rows
function getting_data() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`select * from users`);
        console.log(result.rows);
    });
}
// update row
function update_data() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`
      UPDATE users
      SET password ='vikash_update'
      WHERE email = 'vikash@gmail.com'
      `);
        console.log(result);
    });
}
// delete a row
function Delete_row() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`
      DELETE FROM users WHERE id=4
      `);
        console.log(result);
    });
}
function getUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const query = `SELECT * FROM users WHERE email = $1`;
        const value = [email];
        const result = yield client.query(query, value);
        console.log(result.rows);
    });
}
// getUser("vikash@gmail.com");
// createUsersTable();
getting_data();
// insertIntoTable();
// update_data();
// Delete_row();
