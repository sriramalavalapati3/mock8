const express=require("express")
const userrouter=express.Router();
const {Usermodel}=require("../models/usermodel.js")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")


userrouter.post("/signup",async(req,res)=>{
    const {username,email,password,}=req.body
    try {
        bcrypt.hash(password, 3, async function(err, hash) {
            if(!err)
            {
              let userdata= new Usermodel({username,email,password:hash})
              await userdata.save();
              res.status(201).send("Registered successfully")
            }else{
                res.send("something went wrong while register")
            }
        }); 
    } catch (error) {
        res.send(error.message)
    }
})


userrouter.post("/login",async(req,res)=>{
    const {email,password}=req.body
    try {
     
         const user=await Usermodel.findOne({email})
         if(user){
         bcrypt.compare(password, user.password, function(err, result) {
         if(result){
         const token = jwt.sign({userID:user._id},process.env.token);
        
        
         res.status(201).send({"msg":"Login Successfull","token":token})
         } else {res.send("Wrong Credntials")}
         });
         } else {
         res.send("Wrong Credntials")
         }
         }
     catch (error) {
     res.send(`Something went wrong \n ${error.message}`)
 
 
    }
})


module.exports={userrouter}