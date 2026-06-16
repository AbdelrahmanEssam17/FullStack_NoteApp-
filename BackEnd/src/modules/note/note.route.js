import express from "express";
import * as notes from "./note.controler.js";
import validation from "../../middleware/validation.middleware.js";
import * as notevalidation from "./note.validation.js";
import { verifyToken } from "../../middleware/auth.middleware.js";
const router = express();
router.post(
  "/addnote",
  verifyToken,
  validation(notevalidation.addnote),
  notes.addnote,
);
router.get("/getbyid/:note_id", notes.getnotebyid);
router.get("/getall", notes.getallnote);
router.patch("/update/:note_id", verifyToken, notes.updatenote);
router.delete("/delete/:note_id", verifyToken, notes.deletenotebyid);
router.delete("/delete", verifyToken, notes.deleteallnote);
router.get("/getnotebyuser", verifyToken, notes.gelallnotebyuser);

export default router;
