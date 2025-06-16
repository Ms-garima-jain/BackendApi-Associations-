import { DataTypes } from "sequelize";
import sequelize from "../db/dbConfig.js";
 const Profile = sequelize.define("Profile", {
    id :{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    address:{
        type:DataTypes.STRING,
        allowNull:false
    },
    dob:{
        type:DataTypes.DATEONLY,
        allowNull:false
    },
    gender:{
        type :DataTypes.STRING,
        allowNull:false
    },
    userId:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
 })
  sequelize.sync({alter: true})
.then(result=>{
    console.log("Profile  model created")
})
.catch((err)=>{
     console.log(err)
})
export default Profile