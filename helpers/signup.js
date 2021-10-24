const db=require("../models/index.js")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
module.exports=async(req,res)=>{
    try{
        const Userdetails= await  db.Users.create({
           name:req.body.name,
           email:req.body.email,
           password: bcrypt.hashSync(req.body.password, 13)    // securing the password by hashing it using hashsync of bcrypt 
       })
       Userdetails.save();
       res.json({
        _id:Userdetails._id,
        name:Userdetails.name,
        email:Userdetails.email,
        isadmin:Userdetails.isadmin,
        token:jwt.sign({_id:Userdetails._id,
            name:Userdetails.name,
            email:Userdetails.email,
            isadmin:Userdetails.isadmin},process.env.jwt_secret)
       })
    }catch(err){
       res.json("email already exist")
       console.log(err)
    }
}