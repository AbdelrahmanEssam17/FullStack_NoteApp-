import pool from "../../DB/db.connection.js";
export const addnote = async (req, res, next) => {
  const { description } = req.body;
  const addnotee = await pool.query(
    "insert into note (user_id, description) values ($1,$2)",
    [req.user.id, description],
  );
  res.status(200).json({ message: "note added successfly" });
};
export const getnotebyid = async (req, res, next) => {
  const { note_id } = req.params;
  console.log(note_id);
  const getnotebyid = await pool.query("select * from note where note_id =$1", [
    note_id,
  ]);
  if (getnotebyid.rows.length === 0) {
    return res.status(404).json({ message: "note not found" });
  }
  res.status(200).json({
    message: "note gets successfully",
    note: getnotebyid.rows[0],
  });
};

export const getallnote = async (req, res, next) => {
  const selectall = await pool.query("select * from note");
  res.status(200).json({ message: "note all", selectall });
};
export const updatenote = async (req, res, next) => {
  const { note_id } = req.params;
  const { description } = req.body;

  const updatenote = await pool.query(
    "UPDATE note SET description = $1 WHERE note_id = $2",
    [description, note_id],
  );

  if (updatenote.rowCount === 0) {
    return res.status(404).json({
      message: "note not found",
    });
  }

  res.status(200).json({
    message: "updated successfully",
  });
};
export const deletenotebyid = async (req, res, next) => {
  const { note_id } = req.params;
  const deletenote = await pool.query("delete from note where note_id =$1", [
    note_id,
  ]);
  if (deletenote.rows.length === 0) {
    res.status(404).json({
      message: "note not found",
    });
  }
  res.status(200).json({
    message: "deleted successfully",
  });
};
export const deleteallnote = async (req, res, next) => {
  const deleteall = await pool.query("delete from note");
  res.status(200).json({ message: "success" });
};

export const gelallnotebyuser = async (req, res, next) => {
  const result = await pool.query(
    `SELECT 
        note.note_id,
        note.description,
        users.id,
        users.username,
        users.email
     FROM note
     INNER JOIN users ON note.user_id = users.id`,
  );

  res.status(200).json({
    message: "notes with users",
    data: result.rows,
  });
};
