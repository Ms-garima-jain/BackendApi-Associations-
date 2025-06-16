import bodyParser from "body-parser";
import express  from "express"
import UserRouter from "./Router/user.router.js"
import ProfileRouter from "./Router/profile.router.js"
import OrderRouter from "./Router/order.router.js"
import ProductRouter from "./Router/product.router.js";
import reviewRouter from "./Router/review.router.js"

import "./Model/association.js"
 const  app = express ();
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended:true}))
 app.use("/user", UserRouter)
 app.use("/profile",ProfileRouter)
 app.use ("/order",OrderRouter)
 app.use("/product",ProductRouter)
 app.use("/review",reviewRouter)


  app.listen (3000, ()=>{
    console.log ( " server started ...")
  })