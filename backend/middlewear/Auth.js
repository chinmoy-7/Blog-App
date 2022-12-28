const jwt = require("jsonwebtoken");
const Auth=async (req,res,next)=>{
    try{
    const token = req.headers.authorization;
    // console.log(token)
    if(token){
        jwt.verify(token,process.env.MY_JWT,async(err,decoded)=>{
            if(err){
                res.json({
                    status:"failed"
                })
            }
            // console.log(decoded)
            res.user_id=decoded.user_id
            next();
        })
    }
    }catch(e){
        res.json({
            message:e.message
        })
    }
}

module.exports=Auth

