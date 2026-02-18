 import express from "express";
 import verifyToken from "../middkewares/verifyToken.js"
import { generatePayment, verifyPayment } from "../controllers/paymentController.js";

const router = express.Router();

router.post("/generate-payment",verifyToken,generatePayment);

router.post("/verify-payment",verifyToken,verifyPayment)

export default router