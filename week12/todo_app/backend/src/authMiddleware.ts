import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"
import { string } from "zod";

// Middleware to check for JWT
export const authMiddleware=async(req:Request,res:Response,next:NextFunction)=>{
    const authHeader=req.headers.authorization;

    try {
        const decode = jwt.verify(authHeader!,"mysuperkey");
        if(decode){
            // @ts-ignore 
            req.userId = decode.userId;
            await next();
        }
        
    } catch (error) {
        return res.status(403).json({
            msg:"there is an error",
            erorr:error
        })

    }
}