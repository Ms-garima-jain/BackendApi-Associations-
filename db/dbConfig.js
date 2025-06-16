import { Sequelize } from "sequelize";
let sequelize= new Sequelize("SaveSeqel","root", "root",{
    host:"localhost",
    dialect:"mysql"
})
sequelize.authenticate()
.then(()=>{
    console.log("Database connected")
}).catch(err=>{
     console.log (err)
})
 export default sequelize;