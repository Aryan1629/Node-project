const db=require("../models/index.js")
module.exports= async(req,res)=>{
    try{
     res.render("show.ejs",{elem:  await db.Products.findById(req.params._id)})
    }catch(err){
       res.json({err})
    }
    }