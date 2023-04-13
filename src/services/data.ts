import { pool } from "../utils/database";

export async function saveInfo(data: object) {
  const jsonString = JSON.stringify(data);
  await pool.query(
    `INSERT INTO users VALUES ('${jsonString.substring(
      1,
      jsonString.length - 1
    )}')`
  );
  const res = await pool.query("SELECT * FROM users");
}
