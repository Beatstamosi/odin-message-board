import pool from "./pool.js";

async function getMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function addMessage(message, username) {
  const now = new Date();
  const values = [message, username, now];
  await pool.query(
    "INSERT INTO messages (text, username, added) VALUES ($1, $2, $3)",
    values
  );
}

export { getMessages, addMessage };
