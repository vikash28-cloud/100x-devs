const zod = require("zod")
const express = require("express");
const app = express();


app.get("/", (req, res) => {
    res.json({
        success: true,
        msg: 'mflkejfoeiijvjewfje vn ewn e'
    })
})

function validateInput(obj){
    const schema = zod.object({
        email:zod.string().email(),
        password:zod.string().min(8),
    })
    const response =  schema.safeParse(obj);
    return response
    console.log(response)
}


// console.log(req.body)
app.use(express.json())
app.post("/login", (req, res) => {
    // console.log(req.body)
    const response  = validateInput(req.body)
    console.log(response)

    if(!response.success){
        res.json({
            msg:"form validation failed"
        })

    }
    else{
        res.send({response})
    }

})




app.listen(3000, () => {
    console.log("server is running ozn http://localhost:3000")
});