import express from 'express';
import verifyToken from "../middkewares/verifyToken.js"
import { changePassword, changeUsername } from '../controllers/settingcontroller.js';

const router = express.Router();

router.put("/change-username", verifyToken, changeUsername);
router.put("/change-password", verifyToken, changePassword);


export default router;
