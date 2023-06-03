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

productrouter.get("/post",async(req,res)=>{
  
    try {
        let page=req.body||1
        const perPage = 4; // Number of collections per page
        const skip = (page - 1) * perPage;
        let data= await Productmodel.find().skip(skip).limit(perPage);
        
        res.status(200).send(data)
    } catch (error) {
       res.send(error.message) 
    }
})

productrouter.get("/sort/post",async(req,res)=>{
  
    try {
        let data1=req.body;
        let page=req.body||1
        const perPage = 4; // Number of collections per page
        const skip = (page - 1) * perPage;
        let data= await Productmodel.find({category:data1}).skip(skip).limit(perPage);
        
        res.status(200).send(data)
    } catch (error) {
       res.send(error.message) 
    }
})






module.exports={productrouter}