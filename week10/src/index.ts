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
  } catch (error) {
    console.error("Error creating table:", error);
  } finally {
    await client.end(); // Close the connection
  }
}

// insert into users table
async function insertIntoTable() {
  try {
    await client.connect();
    const result = await client.query(
      `
      INSERT INTO users(username, email, password)
      VALUES('XYZ', 'XYZ@gmail.com', 'XYZ.12');
      `
    );
    console.log(result);
  } catch (error) {
    console.error("Error inserting into table:", error);
  } finally {
    await client.end(); // Close the connection
  }
}

// Reading Table Rows
async function getting_data() {
  await client.connect();
  const result = await client.query(`select * from users`);
  console.log(result.rows);
}

// update row
async function update_data() {
  await client.connect();
  const result = await client.query(
    `
      UPDATE users
      SET password ='vikash_update'
      WHERE email = 'vikash@gmail.com'
      `
  );
  console.log(result);
}

// delete a row
async function Delete_row() {
  await client.connect();
  const result = await client.query(
    `
      DELETE FROM users WHERE id=4
      `
  );
  console.log(result);
}

async function getUser(email: string) {
  await client.connect();
  const query = `SELECT * FROM users WHERE email = $1`;
  const value = [email];

  const result = await client.query(query, value);
  console.log(result.rows);
}

// getUser("vikash@gmail.com");
// createUsersTable();
getting_data();
// insertIntoTable();
// update_data();
// Delete_row();
