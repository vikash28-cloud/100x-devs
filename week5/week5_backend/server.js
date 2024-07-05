const express = require("express");
const mongoose  =require("mongoose");
const {User,dbConnection} = require("./db.js");
const app = express();
const cors = require("cors");
app.use(cors());

app.get("/",(req,res)=>{
    res.send("hello")
})

app.use(express.json());
app.post("/create",async(req,res)=>{
    const {name,descr,link1,link2,link3,intrest} = req.body;
    // db work
    if(!name||!descr||!link1||!link2||!link3||!intrest){
        return res.send("fill full form")
    }
    await User.create({name,descr,link1,link2,link3,intrest})

    res.send("user created successfully");
})

app.get("/users",async(req,res)=>{
    // db work
    let allUsers = await User.find({});

    res.json({
        allUsers
    })
})

app.listen(3000,()=>{
    console.log("http://localhost:3000")
})