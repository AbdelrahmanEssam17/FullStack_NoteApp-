import pool from "../../DB/db.connection.js";

export const addToWishlist = async (req, res) => {
  try {
    const { note_id } = req.body;
    const { id: user_id } = req.user;
    if (!note_id) {
      return res.status(400).json({ message: "note_id is required" });
    }
    const result = await pool.query(
      `INSERT INTO wishlist (user_id, note_id) VALUES ($1, $2) RETURNING *`,
      [user_id, note_id],
    );
    return res.status(201).json({
      message: "Note added to wishlist successfully",
      wishlist: result.rows[0],
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error.message,
      error,
    });
  }
};
export const getAllWishlist = async (req, res) => {
  try {
    const getAll = await pool.query(`SELECT * FROM wishlist`);

    return res.status(200).json({
      message: "All wishlist items",
      wishlist: getAll.rows,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
export const removeFromWishlist = async (req, res) => {
  const { note_id } = req.params;
  if (!note_id) {
    return res.status(400).json({
      message: "note_id is required",
    });
  }
  const deleteNote = await pool.query(
    `DELETE FROM wishlist WHERE note_id = $1`,
    [note_id],
  );
  if (deleteNote.rowCount === 0) {
    return res.status(404).json({
      message: "Note not found in wishlist",
    });
  }
  return res.status(200).json({
    message: "Note deleted successfully",
  });
};

export const deleteallwishlist = async (req, res) => {
  try {
    const result = await pool.query(`DELETE FROM wishlist`);
    return res.status(200).json({
      message: "Wishlist cleared successfully",
      deleted: result.rowCount,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
