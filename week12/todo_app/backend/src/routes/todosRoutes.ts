import { Router } from "express";
import { createTodo, getAllTodos } from "../controller/todoController";
const todoRoute =Router();

todoRoute.get('/allTodos',getAllTodos);
todoRoute.post('/createTodo',createTodo);


export default todoRoute;