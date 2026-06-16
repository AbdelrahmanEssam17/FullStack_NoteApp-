import express from "express";
import dotenv from "dotenv";
import pool from "./src/DB/db.connection.js";
import authroute from "./src/modules/auth/auth.route.js";
import userroute from "./src/modules/user/user.route.js";
import noteroute from "./src/modules/note/note.route.js";
dotenv.config();
pool
  .connect()
  .then((client) => {
    console.log("Database Connected");
    client.release();
  })
  .catch((err) => console.log(err));

const app = express();
app.use(express.json());
app.use("/user", userroute);
app.use("/auth", authroute);
app.use("/note", noteroute);
const port = process.env.PORT;
app.listen(process.env.PORT, "127.0.0.1", () => {
  console.log(`"server is running in "${port}`);
});
