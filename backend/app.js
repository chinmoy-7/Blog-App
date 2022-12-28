const express= require("express")
const cors=require("cors")
const dotenv=require("dotenv")
const connect= require("./connect/connectDB")
const user = require("./Routes/signInAndSignUp")
const blog = require("./Routes/blogRoute")

const app = express();
app.use(cors())
dotenv.config()
app.use(express.json())


app.use("/",user)
app.use("/",blog);

app.listen(process.env.PORT,async ()=>{
    await connect();
    console.log(`The server is up at ${process.env.PORT}`)
})