const express=require("express");
const app=express();
const cors=require("cors");

app.use(express.json());

require('dotenv').config()
const {connection}=require("./config/cofig")
const {userrouter}=require("./routes/credential.routes");
const {productrouter}=require("./routes/products")
const {auth}=require("./middlewares/autherization.middleware")
app.use(cors());
app.use("/api",userrouter)
app.use(auth);
app.use("/api",productrouter)

app.listen(process.env.port,async()=>{
    try {
        await connection;
        console.log(`server running at ${process.env.port} \n database connected`)
    } catch (error) {
        console.log(error.message)
    }
})
