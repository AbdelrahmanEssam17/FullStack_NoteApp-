import express from "express";
import * as auth from "./auth.controler.js";
import upload from "../../middleware/multer.js";
const router = express.Router();
import validation from "../../middleware/validation.middleware.js";
import * as authvalidations from "./auth.validation.js";
import { emailExist } from "../../middleware/emailExist.js";
import { verifyToken } from "../../middleware/auth.middleware.js";

router.post(
  "/register",
  emailExist,
  validation(authvalidations.signup),
  auth.register,
);
router.post("/login", validation(authvalidations.login), auth.login);

// router.post("/logout", auth.logout);
router.patch(
  "/profile/image",
  verifyToken,
  upload.single("image"),
  auth.uploadProfileImage,
);
router.post("/verify-otp", auth.verifyOtp);
router.patch("/update-password", verifyToken, auth.updatepassword);
export default router;
