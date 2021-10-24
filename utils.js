const jwt = require("jsonwebtoken");
module.exports=(req,res,next)=>{
    token=req.params.token
    jwt.verify(token, process.env.jwt_secret,(err,decode)=>{
        if(err){
            res.json(err)
        }else{
            next()
        }
    })
}