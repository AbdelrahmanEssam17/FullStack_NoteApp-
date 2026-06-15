import express from "express";
import * as auth from "./auth.controler.js";
const router = express();
import validation from "../../middleware/validation.middleware.js";
import * as authvalidations from "./auth.validation.js";
import { emailExist } from "../../middleware/emailExist.js";

router.post(
  "/register",
  emailExist,
  validation(authvalidations.signup),
  auth.register,
);
router.post("/login", validation(authvalidations.login), auth.login);
export default router;
