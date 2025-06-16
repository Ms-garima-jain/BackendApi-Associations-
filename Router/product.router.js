import express from "express"
import { bulkCreateProducts,getAllProducts, getProductById } from "../Controller/product.controller.js";
 const router = express.Router();
 router.post("/bulk", bulkCreateProducts);
 router.get("/", getAllProducts);
 router.get("/:id", getProductById);



  export default router