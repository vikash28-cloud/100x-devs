const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.get("/",(req,res)=>{
    res.send("hello")
})

app.get("/sum",(req,res)=>{
    const a =parseInt(req.query.a);
    const b =parseInt(req.query.b);
    let sum = a+b;
    res.send(sum.toString());
})

app.listen(4000,()=>{
    console.log("http://localhost:4000")
});