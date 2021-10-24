const db=require("../models/index.js")
module.exports= async(req,res)=>{     // Creating API 
    try{               /// trying the find data from data base by id and strong in select                             
    const select= await db.Products.findById(req.params._id)   // only for programing use not acceable by brow               
    if(select)res.json(select); else  res.status(404).res.json({errmsg:"not valid entery"})
    }catch(err){
        res.json({err})
    }
}