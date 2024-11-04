import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"
import { string } from "zod";

// Middleware to check for JWT
const authMiddleware=(req:Request,res:Response,next:NextFunction)=>{
    const authHeader=req.headers.authorization;
    const token = authHeader?.split(' ')[1];

    try {
        const decode = jwt.verify(token!,"mysuperkey");
        if(decode){
            req.userId = decode.userId;
            next();
        }
        
    } catch (error) {
        return res.status(403).json({
            msg:"there is an error",
            erorr:error
        })

    }
}