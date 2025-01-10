import { Router } from "express";
import { createTodo, getAllTodos } from "../controller/todoController";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

// Extend Express Request type to include userId
declare module "express-serve-static-core" {
    interface Request {
        userId?: string;
    }
}

const todoRoute = Router();
//@ts-ignore
todoRoute.use("*", async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ msg: "You are not logged in" });
    }

    try {
        const decoded = jwt.verify(authHeader, "mysuperkey") as { userId: string };
        req.userId = decoded.userId;
        await next();
    } catch (error) {
        return res.status(403).json({
            msg: "There was an error",
        });
    }
});

todoRoute.get('/allTodos', getAllTodos);
todoRoute.post('/createTodo', createTodo);

export default todoRoute;
