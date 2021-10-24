const mongoose =require("mongoose");
const  connect=async()=>{
    try{
      mongoose.connect("mongodb+srv://admin:Aryan1628@cluster0.kreus.mongodb.net/Fresh-Fruit?retryWrites=true&w=majority",{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:false,
        useCreateIndex:true
      });
      mongoose.set("debug",true)
      console.log("connected")
    }catch(err){
        console.log(err)
    }
}
connect();
module.exports.ShippingInfo=require("./ShippingInfo.js")
module.exports.Products=require("./products.js")
module.exports.Users=require("./Users.js");
