const db=require("../models/index.js")
module.exports=async (req,res)=>res.render("product.ejs",{pro: await db.Products.find()})
