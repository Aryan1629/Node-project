const mongoose =require("mongoose")
const shippingInfo=mongoose.Schema({
    phone:{
         type:Number,
         require:true
    },
    address:{
        type:String,
        require:true,
    },
    city:{
        type:String,
        require:true
    },
    state:{
        type:String,
        require:true
    },
    pincode:{
        type:Number,
        require:true
    }
})
module.exports=mongoose.model("shippingInfo",shippingInfo)