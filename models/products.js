const mongoose =require("mongoose")
const products=mongoose.Schema({
    name:{
        type:String,
        require:true
     },
   img:{
        type:String,
        require:true
   },
   price:{
        type:String,
        require:true
   },
    instock:{
        type:Number,
        require:true
    },
    des:{ 
         type:String,
        require:true
    }
})
const Products=mongoose.model("products",products)
module.exports=Products