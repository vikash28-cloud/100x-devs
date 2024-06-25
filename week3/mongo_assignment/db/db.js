const mongoose = require("mongoose");

const connectDB= async() =>  {mongoose.connect("mongodb+srv://expertvikash:vikash@cluster0.oiucpty.mongodb.net/courseDB?retryWrites=true&w=majority&appName=Cluster0").then((res)=>{
   console.log("connected to db")
}).catch((err)=>{
    console.log(err)
})}

connectDB();
module.exports =  connectDB;

