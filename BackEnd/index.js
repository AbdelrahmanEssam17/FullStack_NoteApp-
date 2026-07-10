import express from "express";
import dotenv from "dotenv";
import pool from "./src/DB/db.connection.js";
import authroute from "./src/modules/auth/auth.route.js";
import userroute from "./src/modules/user/user.route.js";
import noteroute from "./src/modules/note/note.route.js";
import wishlistroute from "./src/modules/wishlist/wishlist.route.js";
import cors from "cors";
import limiter from "express-rate-limit";
import helmet from "helmet";
dotenv.config();
pool
  .connect()
  .then((client) => {
    console.log("Database Connected");
    client.release();
  })
  .catch((err) => console.log(err));
const limter = limiter({
  windowMs: 15 * 60 * 1000,
  limit: 100,
});
const app = express();
app.use(express.json());
app.use(helmet());
app.use(limter);
app.use(cors());
app.use("/user", userroute);
app.use("/auth", authroute);
app.use("/note", noteroute);
app.use("/wishlist", wishlistroute);
const port = process.env.PORT;
app.listen(process.env.PORT, () => {
  console.log(`"server is running in "${port}`);
});
