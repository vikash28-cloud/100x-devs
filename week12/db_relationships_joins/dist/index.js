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
// correct way to write sql queries in node js 
// protecting from sql injection
function insertion(uname, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`INSERT INTO users (username, email, password)VALUES($1, $2, $3)`, [uname, email, password]);
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // createUsersTable();
        yield insertion("user1", "user1@.com", "myscffeuecret")
            .then(() => console.log("inserted successfully"));
    });
}
main();
