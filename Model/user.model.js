import { DataTypes } from "sequelize";
import sequelize from "../db/dbConfig.js";
const User = sequelize.define("user", {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name :{
        type:DataTypes.STRING(100),
        allowNull:false,
        validate:{
            isAlpha:true
        }
    },
    email:{
        type:DataTypes.STRING,
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    contact:{
        type:DataTypes.BIGINT(12),
        validate:{
            isNumeric:true
        }
    }

}
)
sequelize.sync()
.then(result=>{
    console.log("User model created")
})
.catch((err)=>{
     console.log(err)
})
export default User