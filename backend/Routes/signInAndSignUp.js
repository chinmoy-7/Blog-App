const router = require("express").Router();
const user = require("../Model/user");
const jwt = require("jsonwebtoken")
// const user = require("../Model/user")

router.post("/register",async (req,res)=>{
    try{
        const check = await user.find({email:req.body.email});
        if(check.length!=0){
            return res.json({
                status:"failed"
            })
        }
        console.log(check)
        const newUser = await user.create(req.body)
        console.log(newUser)
        res.status(200).json({
            status:"success"
        })
    }catch(e){
        res.json(400).json({
            message:"failed"
        })
    }
})

router.post("/login",async (req,res)=>{
    try{
        const {email,password}=req.body;
        const checkuser = await user.find({email:email});
        // console.log(checkuser[0]._id)
        if(checkuser.length==0){
            return res.json({
                status:"failed"
            })
        }
        if(password==checkuser[0].password){
        const token = jwt.sign({user_id:checkuser[0]._id},process.env.MY_JWT)
        // console.log(token)
        res.json({
            status:"success",
            token
        })
    }else{
        return res.json({
            status:"failed"
        })
    }
        // res.send("success")
    }catch(e){
        res.json({
            status:"failed"
        })
    }
})

module.exports = router;