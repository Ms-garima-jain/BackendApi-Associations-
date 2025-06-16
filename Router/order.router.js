import  express from "express"
import { createOrder,getAllOrder,getOrderById,updateorder,deleteOrder } from "../Controller/order.controller.js";
 const router = express.Router();
 router.post ("/:userId", createOrder)
 router.get("/",getAllOrder)
 router.get ("/:id",getOrderById)
 router.patch("/:id",updateorder)
 router.delete("/:id", deleteOrder)
  export default router