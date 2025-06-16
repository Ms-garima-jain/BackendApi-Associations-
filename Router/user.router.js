import express  from "express"
import {body}  from "express-validator"
import { signUp, signIn,getallUsers, gerUserById,updateUserId,  deleteById } from "../Controller/user.controller.js";
 const router = express.Router();
router.post("/signUp", body("name", "name is required").notEmpty(),
                 body("name", "only lettar required").isAlpha(),
                 body("email", "email id is required").notEmpty(),
                 body("email", "not a valid  email id ").isEmail(),
                 body("password", "password is required").notEmpty(),
                 body("password", "password must be between 5 and 10").isLength({min:5, max:10}),
                 body("contact","contact is required ").notEmpty(),
                 body("contact","only digits are alllowed").isNumeric(),
                 signUp);
   
router.post("/sign-in", signIn)
router.get ("/", getallUsers)
router.get("/:id",gerUserById)
router.patch("/:id", updateUserId)
 router.delete ("/:id", deleteById)
 export default router   