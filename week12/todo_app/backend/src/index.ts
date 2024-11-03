import express,{Request,Response} from "express";
import authRoute from "./routes/authRoutes";
import todoRoute from "./routes/todosRoutes";
const app =  express();


app.use(express.json());
// routes
app.use("/api/auth",authRoute);
app.use("/api/todos",todoRoute);


app.get('/',(req:Request,res:Response)=>{
    res.send("hello world");
})

app.listen(3000,()=>{
    console.log("server is running on port http://localhost:3000")
})