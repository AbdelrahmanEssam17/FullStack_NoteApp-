import express from "express";
const router = express.Router();
import * as user from "./user.controller.js";

router.get("/getuser/:id", user.getuserbyid);
router.get("/getalluser", user.getalluser);
router.patch("/update/:id", user.updateuser);
router.delete("/delete/:id", user.getuserbyid);
router.delete("/deleteall", user.deletealluser);
export default router;
// rewrite the update logic again
