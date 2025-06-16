import { DataTypes } from "sequelize";
 import sequelize from "../db/dbConfig.js";
 const order = sequelize.define("orders",{
    id :{type : DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    status:{type :DataTypes.STRING},
    total:{type:DataTypes.FLOAT},
    orderDate:{type:DataTypes.DATEONLY},
    paymentMethod:{type:DataTypes.STRING}
 })
 sequelize.sync()
 .then (result =>{
    console.log ( " Order table created")
 })
.catch((err)=>{
     console.log(err)
})

 export default order