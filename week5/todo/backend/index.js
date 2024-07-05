const express = require("express");
const cors = require("cors")
const { createTodo, updateTodo } = require("./types.js");
const { dbconnection, todo } = require("./db.js");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/todo", async (req, res) => {

    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);


    if (!parsedPayload.success) {
        res.json({
            msg: "invalid credentials"
        })
    }

    todo.create({
        title: createPayload.title,
        descr: createPayload.descr,
        completed: false,
    })

    res.json({
        msg: "todo created"
    })


})

app.get("/todos", async (req, res) => {
    let allTodos = await todo.find({});
    res.status(200).json({

        allTodos

    })

})

app.put("/completed", async(req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "you sent the wrong inputs",
        })
    }

    // update function need two arguments what is 
    await todo.update({
            _id:req.body.id
        },{
            completed:true
        }
    )
    res.json({
        msg:"todo marked as completed"
    })
})

app.listen(3000);