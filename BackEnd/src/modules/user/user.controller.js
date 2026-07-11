import pool from "../../DB/db.connection.js";
export const getuserbyid = async (req, res, next) => {
  const { id } = req.params;
  const user = await pool.query("select * from users where id = $1 ", [id]);
  if (user.rows.length === 0) {
    res.status(400).json({ message: "users not found", user });
  }
  res.status(200).json({ message: "users retrive success", user });
};
export const getalluser = async (req, res, next) => {
  const alluser = await pool.query("select * from users");
  res.status(200).json({ message: "users retrive success", alluser });
};
//update logic

export const updateuser = async (req, res, next) => {
  const { id } = req.params;
  const { username, password, email } = req.body;

  const result = await pool.query(
    "UPDATE users SET username = $1, password = $2, email = $3 WHERE id = $4",
    [username, password, email, id],
  );

  if (result.rowCount === 0) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  return res.status(200).json({
    message: "User updated successfully",
  });
};
//problem
export const deleteuserbyid = async (req, res, next) => {
  const { id } = req.params;

  const deletebyid = await pool.query("DELETE FROM users WHERE id = $1", [id]);

  if (deletebyid.rowCount === 0) {
    return res.status(404).json({
      message: "user not found",
    });
  }

  return res.status(200).json({
    message: "user deleted successfully",
  });
};

export const deletealluser = async (req, res, next) => {
  const { id } = req.params;
  const deleteall = await pool.query("delete from users");
  const alluser = await pool.query("select * from users");
  res.status(200).json({ message: "table empty", alluser });
};
