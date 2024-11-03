import { Router } from "express";
import { authlogin, authSigup, getUsers } from "../controller/authController";

const authRoute = Router();

authRoute.route("/signup").post(authSigup);
authRoute.post("/login",authlogin);
authRoute.get("/getUsers",getUsers);

export default authRoute;