import pool from "../../DB/db.connection.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Readable } from "stream";

import cloudinary from "../../utlis/cloudinary/cloudinary.js";
export const register = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedpassword = await bcrypt.hash(password, 8);
  const result = await pool.query(
    "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
    [username, email, hashedpassword],
  );
  res.status(201).json(result.rows[0]);
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  const result = await pool.query("select * from users where email =$1", [
    email,
  ]);
  if (result.rows.length === 0) {
    return res.status(401).json({ message: "email not fount" });
  }
  const users = result.rows[0];
  const isMatch = await bcrypt.compare(password, users.password);
  if (!isMatch) {
    return res.status(401).json({ message: "password mismatch" });
  }
  const token = jwt.sign(
    { id: users.id, role: users.role },
    process.env.SECERT_KEY,
    {
      expiresIn: "1d",
    },
  );
  return res.status(200).json({
    message: "login success",
    token,
    users: { id: users.id, username: users.username, email: users.email },
  });
};

export const uploadProfileImage = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please upload an image",
      });
    }

    res.status(200).json({
      success: true,
      message: "Image uploaded successfully",
      file: req.file,
    });
  } catch (error) {
    next(error);
  }
};

export const updatepassword = async (req, res, next) => {
  try {
    const { oldpassword, confirmpassword, newpassword } = req.body;
    const { id: user_id } = req.user;
    if (!oldpassword || !confirmpassword || !newpassword) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }
    if (confirmpassword !== newpassword) {
      return res.status(400).json({
        message: "Password mismatch",
      });
    }
    const result = await pool.query(
      `SELECT password FROM users WHERE id = $1`,
      [user_id],
    );
    if (result.rowCount === 0) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    const hashedPassword = result.rows[0].password;
    const isMatch = await bcrypt.compare(oldpassword, hashedPassword);
    if (!isMatch) {
      return res.status(401).json({
        message: "Old password is incorrect",
      });
    }
    const hashedNewPassword = await bcrypt.hash(newpassword, 8);
    await pool.query(
      `UPDATE users 
       SET password = $1 
       WHERE id = $2`,
      [hashedNewPassword, user_id],
    );
    return res.status(200).json({
      message: "Password updated successfully",
    });
  } catch (error) {
    next(error);
  }
};
