import express from "express";
import * as wishlist from "./wishlist.controller.js";
const router = express.Router();
router.post("/addtowithlist", wishlist.addTowishlist);
router.get("/getall", wishlist.getAllWishlist);
router.delete("/deleteall", wishlist.deleteallwishlist);
router.delete("/remove-from", wishlist.removefromwishlist);
export default router;
