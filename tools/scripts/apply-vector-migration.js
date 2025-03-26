const { Client } = require("pg");
const fs = require("fs");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });
const runMigration = async () => {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    password: process.env.POSTGRES_PASSWORD,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    ssl: { rejectUnauthorized: false },
  });

  try {
    await client.connect();

    const sql = fs.readFileSync(path.join(__dirname, "../postgres/pgvectorCreate.sql"), "utf8");
    await client.query(sql);

    console.log("Additional migration applied successfully.");
  } catch (err) {
    console.error("Error applying additional migration:", err);
  } finally {
    await client.end();
  }
};

runMigration().catch((err) => {
  console.error("Error applying additional migration:", err);
  process.exit(1);
});
