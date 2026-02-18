import express from "express";
import {adminLogin, adminSignup, login, signup} from "../controllers/authcontroller.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login",login);

router.post("/admin-signup",adminSignup);

router.post("/admin-login",adminLogin);

export default router;