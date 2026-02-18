import express from "express";
import verifyToken from "../middkewares/verifyToken.js";
import { getAllOrders, getMetrics, getOrdersByUserId, updateOrderStatus } from "../controllers/orderController.js";



const router = express.Router();


router.get("/get-orders-by-user-id",verifyToken,getOrdersByUserId);

router.get("/get-all-orders",verifyToken,getAllOrders);

router.get("/get-metrics",verifyToken,getMetrics);

router.put("/update-order-status/:paymentId",verifyToken,updateOrderStatus);



export default router;