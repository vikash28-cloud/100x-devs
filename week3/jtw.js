// we have to understand three functions 
// decode , verify and generate

const jwt = require("jsonwebtoken");

const value={
    name:"vikash",
    accno:"676856566578"
}

// const token = jwt.sign(value,"secret")

const varifiedValue = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidmlrYXNoIiwiYWNjbm8iOiI2NzY4NTY1NjY1NzgiLCJpYXQiOjE3MTg2MDY2MTd9.vM8DKKCqpyylJS6DOREcqsmGOR3bJb99v5HokA-WZvM","secret");


console.log(varifiedValue)
