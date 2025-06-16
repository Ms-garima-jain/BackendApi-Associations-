import {validationResult} from "express-validator";
import bcrypt from "bcrypt"
import User from "../Model/user.model.js";
export const signUp= async (request,response , next)=>{
    try{
        let error =validationResult(request);
        if (!error.isEmpty())
        {
            return response.status(401).json({error:"Bad request | invalid data", errorMessages:error.array()});
            
        }
        let {name, email, password, contact}= request.body;
            let saltKey =  await bcrypt.genSaltSync(12);
            password =  await bcrypt.hashSync(password, saltKey)
            let user= await User.create({name, email, password, contact})
            return response.status(201).json({message:"Sighn up Success", user})

    }
        catch(err)
        {
return  response.status(500).json({error:"Internal server error"})
        }
    }
     export const signIn = async ( request, response, next)=>{
         try{
            let {email, password}= request.body;
            let user = await User.findOne({where:{email}, raw:true})
            if (user)
            {
                let status = bcrypt.compareSync(password, user.password);
                return status ?  response.status(200).json({ message:"Sign in success", user}):response.status(401).json({error:"Unauthorized user | invalid password"})
            }
         }
         catch(err){

            return response.status(500).json({ error:"Internal server Error..."})
         }
     }
    //   get All users 
      export const getallUsers = async (request, response, next)=>{
       try{
         let users = await User.findAll();
         return response.status(200).json({ success:true, message :"user fetched successfully", data:users})
          }   
      catch(err){
       console.log(err);
       return response.status(500).json({ success : false , message :"server error  while fetching  users "})

           }      

      }
      // get user by id 
       export const gerUserById= async (request, response, next)=>{
        try{
             let {id}= request.params;
           let user=  await  User.findByPk(id);
           if (!user)
           {
            return response.status(404).json ({ success :false, message:"User not found"})
           }
           else
           {
            return response.status(200).json ({success:true, message:"user fetched successfully", user :user})
           }
        }
        catch(err){
             console.log ( err);
             return response.status(500).json ({ success:false, message :"internal server error", })
        }
       }
       // update user by id
        export const updateUserId= async(request, response, next)=>{
        try{
           let {id}= request.params;
             await User.update({contact:request.body.contact}, {where:{id}})
            return response.status (201).json ({status :true, message:"Update successfully"})

        }
        catch (err)
        {
            console.log ( err);
            return response.status (500).json({success:false , message :"internal server error"})
        }
       }
       // delete by user id 
       export  const deleteById=  async (request, response, next)=>{
            let {id} = request.params;
            try
            { const user = await User.findByPk(id)
                 if (!user)
                 {
                    return response.status(404).json({success:false, message:"user not found"})
                 }
                 else
                 {
                let  deleteuser = await User.destroy({where:{id:id}})
                return response.status(200).json({success:true, message:" user deleted successfully",user:deleteuser})
                 }
            }
            catch ( err)
            {
                 console.log ( err);
                   return response.status(500).json ({success:false , message:"internal server error"})
            }
        }

        const generateToken = (email)=>{
   let payload = {email: email};
   let token = jwt.sign(payload,"garimajainkjdhadbajbsd",{expiresIn: 60*60});
   console.log(token);
   return token;
}