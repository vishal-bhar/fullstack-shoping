import express from "express";
import {
    blackListProduct,
     createProduct, 
     deleteProduct, 
     getProduct, 
     getProductByName, 
     removeFromBlacklist, 
     updateProduct
    } 
     from "../controllers/productController.js"
import verifyToken from "../middkewares/verifyToken.js";
import {upload} from "../middkewares/multer.js"


const router = express.Router();

router.post("/create-product",verifyToken, upload.array("images",4),createProduct)

router.put("/update-product/:id",verifyToken,updateProduct);

router.delete("/delete-product/:id",verifyToken,deleteProduct);

router.get("/get-product",getProduct);

router.get("/get-product-by-id-name",getProductByName);

router.put("/blacklist-product/:id",verifyToken,blackListProduct);

router.put("/remove-from-blacklist/:id",verifyToken,removeFromBlacklist)

export default router;