const jwt=require("jsonwebtoken");
const fs=require("fs")
require('dotenv').config()
const auth=(req,res,next)=>{
    const token=req.headers.authorization;
    
    try {
    if(token)
    {
       
            const decoded=jwt.verify(token,process.env.token);
        
          
            if(decoded)
            {
                req.body.userId=decoded.userID
                next()
            }
        
      
       
         
    }else{
        res.status(404).send("please login")
    }
   } catch (error) {
    res.send(error);
    console.log(error,'errorin authenctication middleware');
   }
}

module.exports={auth}
