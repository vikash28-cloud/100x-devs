const { Router } = require("express");
const adminMiddleware = require("../middleware/adminMiddleware");
const { Admin } = require("../models/adminModel");
const { Course } = require("../models/coursesModel");
const { User } = require("../models/usersModel");
const jwt = require("jsonwebtoken");

const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const {username,password} = req.body;
    Admin.create({
        username:username,
        password:password
    })
    res.json({
        msg:"Admin crated successfully"
    })
});

router.post("/signin",(req,res)=>{
     // Implement admin signup logic
     const username = req.body.username;
     const password = req.body.password;
   
     const user = User.findOne({
        username,
        password
     })

     if(user){
        const token = jwt.sign({username},"vikash_server");
        res.json({
            token
        })
     }
     else{
        res.status(411).json({
            message: "Incorrect email and pass"
        })
     }
})

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const {title,description,imageLink,price} = req.body;
    Course.create({
        title:title,
        description:description,
        imageLink:imageLink,
        price:price
    })

    res.json({
        msg:"course created successfully"
    })

});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const courses =await Course.find({});
    res.json({
        courses
    })
});

module.exports = router;