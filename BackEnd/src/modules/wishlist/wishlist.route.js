import express from "express";
import * as wishlist from "./wishlist.controller.js";
import { verifyToken } from "../../middleware/auth.middleware.js";
const router = express.Router();
router.post("/addtowithlist", verifyToken, wishlist.addToWishlist);
router.get("/getall", wishlist.getAllWishlist);
router.delete("/deleteall", wishlist.deleteallwishlist);
router.delete("/remove-from", wishlist.removefromwishlist);
export default router;
