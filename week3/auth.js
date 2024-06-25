const express = require("express");
const zod = require("zod");
const app = express();
const jwt = require("jsonwebtoken")
let users = [
    {
        email: "vikash@gmail.com",
        password: "vidwdwkash.12"
    },
    {
        email: "hello@gmail.com",
        password: "vikdwdwash.12"
    },
    {
        email: "world@gmail.com",
        password: "vikadedwsh.12"
    },
    {
        email: "gla@gmail.com",
        password: "vidwwdkash.12"
    },
]

const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
})
app.use(express.json());
app.post("/signin", (req, res) => {
    const newUser = req.body;
    const response = schema.safeParse(req.body);
    if (!response.success) {
        res.send("Enter details Properly")
    }
    else {
        const email = req.body.email;
        const password = req.body.password;
        let exist = false;
        for (let i = 0; i < users.length; i++) {
            if (email === users[i].email && password === users[i].password) {
                exist = true;
                break;
            }
        }
        if (exist) {
            res.send("user already exist")
        }
        else {

            let token = jwt.sign({ email: email }, "1234567");
            console.log(token)
            res.json({
                msg: "signed In Successfully",
                token
            });

        }


    }

})


app.get("/users", function (req, res) {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, "1234567");
        const email = decoded.email;
        res.json({
            users: users.filter((user) => {
                if (user.email == email) {
                    return false
                }
                else {
                    return true;
                }
            })
        })
    } catch (err) {
        return res.status(403).json({
            msg: "Invalid token",
        });
    }
});

app.listen(3000, () => {
    console.log("http://localhost:3000")
})