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
async function createUsersTable() {
  try {
    await client.connect();
    const result = await client.query(`
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(58) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log(result);
  } catch (error) {
    console.error("Error creating table:", error);
  } finally {
    await client.end(); // Close the connection
  }
}
// insertion in a table 
async function insertion(uname: string, email: string, password: string) {
  await client.connect();
  const result = await client.query(
    `INSERT INTO users (username, email, password)VALUES ('${uname}', '${email}', '${password}')`
  );
}

// Relationships 







async function main() {
  // createUsersTable();
  await insertion("vikdwdwdwash", "viwdwdwkash@gmail.com", "myscecret")
  .then(
    () => console.log("inserted successfully")
  )
}
main();
