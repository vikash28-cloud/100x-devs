import express ,{Request,Response} from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import jwt, { JwtPayload } from "jsonwebtoken"
import path from "path";

// middlwares
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))


// api Routes

// signin
app.post("/signin", (req, res) => {
    const _email = req.body.email;
    const _password = req.body.password;
    // check and validate email and password from db

    // generate token
    const token = jwt.sign({ id: 1 }, "mySeceretKey");

    // send response and cookie to the user
    res.cookie("token", token);
    res.send("signin successfully");
})

// protected api route
app.get("/users", (req: Request, res: Response): void => {
    // first verify the token
    const token = req.cookies.token;
    if (!token) {
        res.json({
            msg: "Unauthorized User, first login"
        });
        return;
    }
    // verify the token
    const decoded = jwt.verify(token, "mySeceretKey") as JwtPayload
    res.json({
        userId: decoded.id,
        msg: "now you can access the protected route"
    })
})

// logout Route
app.get("/logout",(req,res)=>{
    res.clearCookie("token");
    res.send("logout successfully");
})



app.listen(8000, () => {
    console.log("server is running on port http://localhost:8000")
})