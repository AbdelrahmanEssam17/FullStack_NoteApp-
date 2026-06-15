import pool from "../DB/db.connection.js";
export const emailExist = async (req, res, next) => {
  const { email } = req.body;
  const isexist = await pool.query("select email from users where email =$1", [
    email,
  ]);
  if (isexist.rows.length > 0) {
    return res.status(400).json({ message: "email exist" });
  }
  next();
};
