const mongoose=require("mongoose");
const validator=require("validator")
const User=mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value))
            throw new Error("enter the vlid Emal address")
        }
    },
    password:{
        type:String,
        require:true
    },
    isadmin:{
        type:Boolean,
        defualt:false
    }
})
const Users=mongoose.model("User",User);
module.exports=Users;