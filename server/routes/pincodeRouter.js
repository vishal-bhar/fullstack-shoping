import express from "express";
import { addPincodes, getPincode } from "../controllers/pincodeController.js";
import verifyToken from "../middkewares/verifyToken.js";
const router = express.Router();

router.post("/add-pincodes",verifyToken,addPincodes);
router.get("/get-pincodes/:pincode",getPincode);




export default router