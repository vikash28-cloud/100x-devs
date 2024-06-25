const express = require('express');
const bodyParser = require('body-parser');
const {connectDB} = require('./db/db.js');
const app = express();
const JWT_SECRET = "vikash_server";

const adminRouter = require("./routes/adminRoute.js")
const userRouter = require("./routes/userRoute.js");

// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use("/admin", adminRouter)
app.use("/user", userRouter)

console.log('hello');
app.get("/",(req,res)=>{
    res.send("hello")
})
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports= JWT_SECRET;