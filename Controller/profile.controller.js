import { request, response } from "express";
import {User, Profile} from "../Model/association.js"
//  [ creating a profile for a user]
 export const createProfile= async (request, response , next)=>{
    try{

        const {address, dob , gender, userId}= request.body
        let user = await User.findByPk(userId);
        if (!user)
        {
            return response.status(404).json({success:false, message:"User not Found"})
        }
        //  check if profile already exists
        let  existingprofile = await Profile.findOne({where:{userId}})
        if (existingprofile)
        {
            return response.status(400).json({success:false, message:"Profile already exists"})
        }
        
        // [createtig profile if not exists]
        const profiledetail = await Profile.create({userId, address, dob,gender})
        return response.status(200).json ({ success:true,message :"profile created successfully", data:profiledetail})
    }
    catch (err)
    {
 console.log (err);
  return response.status(500).json ({success:false , message :"Internal server error"})
    }
 }
  export const getProfileByUserId = async(request, response, next)=>{
     try
     {
        const {userId}=request.params;
        const profile = await Profile.findOne({
            where:{userId},
            include : {model :User}
        })
        if (!profile) {
      return response.status(404).json({ success: false, message: "Profile not found" });
    }
     return response.status(200).json({
      success: true,
      message: "Profile fetched successfully",
      data: profile,
    });

     }
     catch (err)
     {
        console.log(err)
        return response.status(500).json ({success:false, message :"internal server error"})
     }
  }
//    [get all users profile with  user model]
   export const  getallProfile = async (request, response, next)=>{
    try{
    let getprofiles = await Profile.findAll({
        include:{
            model:User
        }
    })
    return response.status (200).json ({ success:true, message :" all profiles fetched ", data:getprofiles})
    }
    catch (err)
    {
         console.log (err)
         return response.status (500).json ({success:false, message :"internal server error "});
    }  
}
// ----------------------------------------
//  update profile
 export const updateProfileByuserId = async ( request , response, next)=>{
    let {userId}= request.params;
     const checkprofile = await Profile.findOne({where:{userId}})
     if (!checkprofile)
     {
        return response.status(404).json({success:false, message: "Profile not found"})
     }
    const {address,  dob, gender}= request.body
    let updateprofile = await  Profile.update ({address, dob, gender }, {where :{userId}})
    return response.status(200).json({success:false, message:"Profile updated successfully", data:updateprofile})
      
 }