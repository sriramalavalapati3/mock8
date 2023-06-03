const express=require("express")
const productrouter=express.Router();
const {Productmodel}=require("../models/product.model")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken");

productrouter.post("/post",async(req,res)=>{
  
    try {
        let data= new Productmodel(req.body);
        await data.save();
        res.status(200).send("successfully posted")
    } catch (error) {
       res.send(error.message) 
    }
})






module.exports={productrouter}