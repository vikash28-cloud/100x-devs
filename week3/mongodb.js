const mongoose = require("mongoose");
const express = require('express');
const app = express();


mongoose.connect("mongodb+srv://expertvikash:vikash@cluster0.oiucpty.mongodb.net/user_app_new?retryWrites=true&w=majority&appName=Cluster0").then(() => {
    console.log("db connection successful")
}).catch((err) => {
    console.log("error");
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number

})
const User = mongoose.model('Users', userSchema);
app.use(express.json())


app.post("/signup", async (req, res) => {
    const { name, email, age } = req.body

    const userExist = await User.findOne({ email: email });
    if (userExist) {
        res.send("user already exist");
    }
    else {
        const newUser = new User({
            name: name,
            email: email,
            age: age
        })
        newUser.save();
        res.send("user registered successfully")
    }


})

app.listen(3000, () => {
    console.log("http://localhost:3000")
})