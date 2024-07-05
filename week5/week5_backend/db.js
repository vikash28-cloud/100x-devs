
const  mongoose  = require("mongoose")


const dbConnection = mongoose.connect("mongodb://localhost:27017/week5").then((res)=>{
    console.log("db connected successfully");
}).catch((err)=>{
    console.log("error");
})


const userSchema = mongoose.Schema({
    name:String,
    descr:String,
    link1:String,
    link2:String,
    link3:String,
    intrest:String
})


const User =  mongoose.model("Users",userSchema);

module.exports  = {User,dbConnection};