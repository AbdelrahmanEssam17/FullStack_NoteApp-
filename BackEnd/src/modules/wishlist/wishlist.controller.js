import pool from "../../DB/db.connection.js";

export const addToWishlist = async (req, res) => {
  try {
    console.log(req.user);
    const { note_id } = req.body;
    const { id: user_id } = req.user;

    console.log(user_id);
    const result = await pool.query(
      `
      INSERT INTO wishlist (user_id, note_id)
      VALUES ($1, $2)
      RETURNING *;
      `,
      [user_id, note_id],
    );

    return res.status(201).json({
      message: "Note added to wishlist successfully",
      data: result.rows[0],
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
export const getAllWishlist = async (req, res, next) => {};
export const removefromwishlist = async (req, res, next) => {};

export const deleteallwishlist = async (req, res, next) => {};
