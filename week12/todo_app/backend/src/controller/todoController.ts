import { PrismaClient } from "@prisma/client"
import { Request, Response } from "express";
import { number, z } from "zod";
const prisma = new PrismaClient();



export const getAllTodos=async(req:Request,res:Response)=>{
    let allTodos = await prisma.todo.findMany({});
    res.status(200).json({
        msg:"All Todos",
        allTodos
    })

}

const todoSchema = z.object({
    title: z.string(),
    description: z.string(),
    userId:z.number()
})
export const createTodo=async(req:Request,res:Response)=>{
    const zodSuccess = todoSchema.safeParse(req.body);
    if(!zodSuccess.success) {
        throw Error("enter valid todo info");
    }

    let newTodo = await prisma.todo.create({
        data:req.body
    })

    res.status(200).json({
        msg:"Todo created",
        newTodo,
        
    })
    
}