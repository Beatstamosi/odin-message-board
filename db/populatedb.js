import { Client } from "pg";
import "dotenv/config";

const CREATE_TABLE_SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text VARCHAR(150),
    username VARCHAR(100),
    added TIMESTAMP
);
`;

const INSERT_SQL = `
INSERT INTO messages (text, username, added) 
VALUES
  ($1, $2, $3),
  ($4, $5, $6),
  ($7, $8, $9);
`;

async function main() {
  console.log("Seeding...");

  const client = new Client({
    connectionString: `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE}`,
  });

  await client.connect();
  await client.query(CREATE_TABLE_SQL);

  const now = new Date();
  const values = [
    "Hi there",
    "Amando",
    now,
    "Hello Friends",
    "Julia",
    now,
    "Hello World",
    "Charles",
    now,
  ];

  await client.query(INSERT_SQL, values);
  await client.end();
  console.log("done");
}

main().catch((err) => {
  console.error("Error:", err);
});
