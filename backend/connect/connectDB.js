const mongoose = require("mongoose");

const connect=()=>{
    mongoose.set("strictQuery",false)
    return mongoose.connect("mongodb+srv://root:root123@cluster0.3pnvzf4.mongodb.net/?retryWrites=true&w=majority").then((res)=>{
        console.log("Connected to DB")
    })
}
module.exports = connect