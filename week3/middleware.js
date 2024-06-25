// JSON Data: JSON (JavaScript Object Notation) is a format for structuring data. It's commonly used for transmitting data in web applications.

// HTTP Request: This is a request sent by a client to a server over the web. It can contain data that the server needs to process.

// Parsing: Parsing means to analyze a string of data and convert it into a structured format that a program can understand and use.


const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.status(200).json({
        message: "hey welcome",
        status: 200,
    });
});

// writing middleware
function userMiddleware(req, res, next) {

    console.log("middleware called")
    const uname = req.headers.username;
    const pass = req.headers.password;

    if (uname === "vikash" && pass === "2896") {
        next();
    } else {
        return false;
    }

}

let no_of_requests = 0;
function calculateRequests(req, res, next) {
    no_of_requests += 1;
    if(no_of_requests<=5){
        console.log(no_of_requests);
        next()
    }
    else{
        res.send("you have reached your request limit")
    }
    
}

app.get("/health/:id", calculateRequests, userMiddleware, (req, res) => {
    let kidney = req.query.kidneys;

    const id = req.params.id

    if (kidney != 1 && kidney != 2) {
        kidney = 0
    }
    console.log(req.params);

    res.send(
        `<h1>id = ${id}</h1>
      
      <h1>You Have logged in successfully</h1>
      
      <p>You have ${kidney} kidneys</p>`
    );

});


app.use(userMiddleware);   //all routes after this statement call usermiddleware first 
// it parses incoming json data from http request
app.use(express.json()) //this middleware is used to get data from body 
// we cannot access body without express.json middleware
app.get("/body",(req,res)=>{
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;
    console.log(req.body);
    res.send(`<h1>No. of kidneys = ${kidneyLength}</h1>`);
})


// error handling middleware
// this middleware executes if any exception occurs that by we kept it at end
app.use(function(err,req,res,next){
    res.json({
        message:"sorry something went wrong"
    })
})


app.listen(3000, () => {
    console.log("server is running on http://localhost:3000/");
});



