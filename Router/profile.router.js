import express from "express"
import {createProfile,getProfileByUserId, getallProfile, updateProfileByuserId} from  "../Controller/profile.controller.js"
  const  router = express.Router();
   router.post ("/", createProfile)
   router.get ("/:userId", getProfileByUserId)
   router.get("/",getallProfile )
   router.put ("/:userId", updateProfileByuserId)

    export default router