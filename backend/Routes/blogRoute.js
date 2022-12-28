const router = require("express").Router();
const jwt = require("jsonwebtoken")
const blog=require("../Model/blog")
const auth=require("../middlewear/Auth")
router.post("/savepost",auth,async (req,res)=>{
    try{
        const newPost = await blog.create({
            userId:res.user_id,
            title:req.body.title,
            description:req.body.desc
        })
        res.json({
            status:"sucess"
        })
    }catch(e){
        res.json({
            message:e.message
        })
    }
})

router.get("/getpost",auth,async (req,res)=>{
    try{
    //    console.log(res.user_id)
        const posts = await blog.find({userId:res.user_id})
        console.log(posts)
        res.json(posts)
    }catch(e){
        res.json({
            message:e.message
        })
    }
})

module.exports=router