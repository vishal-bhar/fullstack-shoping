import express from "express";
import verifyToken from "../middkewares/verifyToken.js"
import { createReview, deleteReview, getReview, replyReview, updateReview } from "../controllers/reviewController.js";


const router = express.Router();

router.post("/create-review",verifyToken,createReview);

router.put("/update-review/:id",verifyToken,updateReview);

router.delete("/delete-review/:id",verifyToken,deleteReview);

router.get("/get-review/:id",getReview);

router.put("/reply-review/:id",verifyToken,replyReview);

export default router;