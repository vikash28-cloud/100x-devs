const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/userMiddleware");
const { User } = require("../models/usersModel");
const { Course } = require("../models/coursesModel");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const {username,password} = req.body;
    User.create({
        username:username,
        password:password
    })
    res.json({
        msg:"user crated successfully"
    })
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({});

    res.json({
        courses: response
    })
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;


   await User.updateOne({
        username:username
    },{
        "$push":{
            purchasedCourses:courseId
        }
    })

    res.json({
        mgs:"course purchased successfully"
    })
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username:req.headers.username
    })
    const purchasedCourses = await Course.find({
        _id:{
            "$in":user.purchasedCourses
        }
    })

    res.json({
        purchasedCourses
    })
});

module.exports = router