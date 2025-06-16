import express from "express";
import { bulkInsertReviews ,getReviewsByUserId} from "../Controller/review.controller.js";

const router = express.Router();

router.post("/bulk", bulkInsertReviews);  
router.get("/user/:userId", getReviewsByUserId);
export default router;
