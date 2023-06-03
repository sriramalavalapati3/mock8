const mongoose=require("mongoose");
const productSchema=mongoose.Schema({
    "name":String, 
    "userId":String,
    "description" : String,
    "category" : String,
    "image" : String,
    "location" :String ,
    "postedAt" : {
        type: Date,
        default: Date.now // Set the default value to the current date
      },
    "price":Number
})

const Productmodel=mongoose.model("productdetails",productSchema)

module.exports={Productmodel}