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
async function createUsersTable(table_name: string) {
  try {
    await client.connect();
    const result = await client.query(`
      CREATE TABLE ${table_name} (
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
async function insertion(
  table_name: string,
  uname: string,
  email: string,
  password: string
) {
  await client.connect();
  const result = await client.query(
    `INSERT INTO ${table_name} (username, email, password)VALUES ('${uname}', '${email}', '${password}')`
  );
}

// transaction

async function insertUserAndAddress(
  username: string,
  email: string,
  password: string,
  city: string,
  country: string,
  street: string,
  pincode: string
) {
  try {
    await client.connect();

    // Start transaction
    await client.query("BEGIN");

    // Insert user
    const insertUserText = `
          INSERT INTO users (username, email, password)
          VALUES ($1, $2, $3)
          RETURNING id;
      `;
    const userRes = await client.query(insertUserText, [
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
    await client.query(insertAddressText, [
      userId,
      city,
      country,
      street,
      pincode,
    ]);

    // Commit transaction
    await client.query("COMMIT");

    console.log("User and address inserted successfully");
  } catch (err) {
    await client.query("ROLLBACK"); // Roll back the transaction on error
    console.error("Error during transaction, rolled back.", err);
    throw err;
  } finally {
    await client.end(); // Close the client connection
  }
}

async function main() {
  // createUsersTable("table1");
  // await insertion("vikdwdwdwash", "viwdwdwkash@gmail.com", "myscecret")
  // .then(
  //   () => console.log("inserted successfully")
  // )

  insertUserAndAddress(
    "ironman",
    "ironman@mark4.com",
    "stark",
    "california",
    "USA",
    "mountain-hills",
    "281001"
  );
}
main();
