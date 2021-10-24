const db=require("../models/index.js")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
module.exports=async(req,res)=>{              // post mathod of signin to make user authenticate
    const userdata=  await db.Users.findOne({ email:req.body.email})
      userdata?bcrypt.compareSync(req.body.password, userdata.password)?  // comparing the entered password and the hash password in datadabe using comparesync mathod of bcrypt
    res.json({
     _id:userdata._id,
     name:userdata.name,
     email:userdata.email,
     isadmin:userdata.isadmin,
     token:jwt.sign({_id:userdata._id,
         name:userdata.name,
         email:userdata.email,
         isadmin:userdata.isadmin},process.env.jwt_secret)
    }): res.json("invalid email or password"):
    res.json("invalid email or password")  
 }