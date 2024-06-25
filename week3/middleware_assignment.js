// assignment 1
// const request = require('supertest');
// const assert = require('assert');
const express = require('express');

const app = express();
let requestCount = 0;

// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// maintain a count of the number of requests made to the server in the global
// requestCount variable

app.get("/error",(req,res)=>{
  let a;
  a=a.length;
  res.status(200).json({
      msg:"done"
  })
})

app.use((req,res,next)=>{
    
    requestCount++;
    console.log("requset = ",requestCount);
    next();
   
})


app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/requestCount', function(req, res) {
  res.status(200).json({ requestCount });
});

// error handling middleware
// it is placed at the end of the file
app.use((err,req,res,next)=>{
  console.log("error");
})

app.listen(3000);

module.exports = app;