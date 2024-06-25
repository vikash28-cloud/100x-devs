// zod is a schema declearationg and validation library
const express = require("express");
const zod = require("zod");
const app = express();

// create schema using zod

const schema2 = zod.object({
    email: zod.string(),
    password: zod.string(),
    country: zod.literal("IN").or(zod.literal("US")),
    kidneys: zod.array(zod.number())

})

const schema = zod.array(zod.number()); //zod



// middlewares
app.use(express.json());

// routes
app.get("/", (req, res) => {
    res.status(200).json({
        message: "hey welcome",
        status: 200,
    });
});

app.get("/body", (req, res) => {
    const kidneys = req.body.kidneys;
    // const kidneyLength = kidneys.length;
    const response = schema.safeParse(kidneys); //zod
    console.log(req.body);

    if (!response.success) {
        res.json({
            msg: "invalid input please try again",
        });
    } else {
        res.send({
            response,
        });
    }
});



function validateInput(obj) {
    const schema = zod.object({

        email: zod.string().email(),
        password: zod.string().min(8),

    })

    const response = schema.safeParse(obj);
    console.log(response)
}

validateInput({
    email: "vikash@gmail.com",
    password: "vikash.12"
});







app.use((err, req, res, next) => {
    res.json("error")
})

// listen port
app.listen(3000, () => {
    console.log("server is running on http://localhost:3000/");
});
