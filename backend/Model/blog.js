const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
    userId:String,
    title:String,
    description:String
})

const blog = mongoose.model("blog",blogSchema);

module.exports = blog;