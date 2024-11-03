"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTodo = exports.getAllTodos = void 0;
const client_1 = require("@prisma/client");
const zod_1 = require("zod");
const prisma = new client_1.PrismaClient();
const getAllTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let allTodos = yield prisma.todo.findMany({});
    res.status(200).json({
        msg: "All Todos",
        allTodos
    });
});
exports.getAllTodos = getAllTodos;
const todoSchema = zod_1.z.object({
    title: zod_1.z.string().min(1, "Title is required"),
    description: zod_1.z.string().min(1, "Description is required"),
    userId: zod_1.z.number()
});
const createTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const zodSuccess = todoSchema.safeParse(req.body);
    if (!zodSuccess.success) {
        throw Error("enter valid todo info");
    }
    let newTodo = yield prisma.todo.create({
        data: req.body
    });
    res.status(200).json({
        msg: "Todo created",
        newTodo
    });
});
exports.createTodo = createTodo;
