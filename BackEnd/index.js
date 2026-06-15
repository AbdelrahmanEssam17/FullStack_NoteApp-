import express from "express";
import dotenv from "dotenv";
import pool from "./src/DB/db.connection.js";

dotenv.config();
pool
  .connect()
  .then((client) => {
    console.log("Database Connected");
    client.release();
  })
  .catch((err) => console.log(err));

const result = await pool.query("SELECT * FROM users");
console.log(result.rows);

const app = express();
const port = process.env.PORT;
app.listen(process.env.PORT, "127.0.0.1", () => {
  console.log(`"server is running in "${port}`);
});
