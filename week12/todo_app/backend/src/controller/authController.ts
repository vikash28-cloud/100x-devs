import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express"
import jwt  from "jsonwebtoken";
import { z } from "zod";
const prisma = new PrismaClient();
const signupSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
})
export const authSigup =async(req:Request,res:Response)=>{
    

    const zodSuccess = signupSchema.safeParse(req.body);

    if (!zodSuccess.success) {
        throw Error("Enter valid Credentials")
    }
    let user =  await prisma.user.findFirst({
        where:{
            email:req.body.email
        }
    })

    if(user){
        throw Error("User already exists")
    }

    user = await prisma.user.create({
        data:req.body
    })

    res.status(200).json({
        msg:"user registered successfully"
    })
}


const loginSchema = z.object({
    email: z.string().email(),
    password: z.string(),
})

export const authlogin=async( req:Request,res:Response)=>{
    const zodSuccess = loginSchema.safeParse(req.body);
    if (!zodSuccess.success) {
        throw Error("Enter valid Credentials");
    }
    let user = await prisma.user.findFirst({
        where: {
            email: req.body.email
        }
    })

    if(req.body.password!==user?.password){
            throw Error("enter correct email or password");
    }

    const token =  jwt.sign({id:user?.id},"mysuperkey");


    res.status(200).json({
        msg: "user logged in successfully",
        user:user?.name,
        token,
        key:true
    })

}


export const getUsers=async( req:Request,res:Response)=>{
    let allUsers = await prisma.user.findMany({});

    res.status(200).json({
        msg:"all users",
        allUsers
    })
}