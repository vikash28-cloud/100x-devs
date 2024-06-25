const { error } = require("console");
const express = require("express")
const app = express();

// logic
const fatorial = (a)=>{
    let fact=1;

    for(let i=1;i<=a;i++){
        fact=fact*i;
    }
    return fact
}

// routes
app.get("/",(req,res)=>{
    res.json({
        status: 200,
        sucess:true,
        message : "connected to localhost successfully "
    })
})

app.get("/error",(req,res)=>{
    throw new Error("there is an error")
})

app.get("/find",(req,res)=>{
    var a = req.query.a;
    res.send("factorial = "+fatorial(a));
})
app.listen(3000,()=>{
    console.log("app is listening on http://localhost:3000")
})