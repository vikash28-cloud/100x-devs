const mongoose = require("mongoose");
const { string } = require("zod");

const dbconnection = mongoose
  .connect("mongodb://localhost:27017/Todo_App")
  .then(() => {
    console.log("db connected successfully");
  })
  .catch((err) => {
  
    console.log("error in db connection", err);
});


const TodoSchema = mongoose.Schema({
    title:String,
    descr:String,
    completed:{
      type:Boolean,
      default:false,
    }
})

const todo = mongoose.model("todos",TodoSchema);


module.exports = {dbconnection ,todo};
