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
  const token = jwt.sign({ id: users.id }, process.env.SECERT_KEY, {
    expiresIn: "1d",
  });
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
  const { oldpassword, newpassword, confirmpassword } = req.body;
  const { id: user_id } = req.user;
  if (!oldpassword || newPassword || confirmpassword) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }
  if (newPassword !== confirmPassword) {
    return res.status(400).json({
      success: false,
      message: "Passwords do not match",
    });
  }
  const result = await pool.query(`select password from users where id =$1`, [
    id,
  ]);
};
