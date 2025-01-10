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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todoController_1 = require("../controller/todoController");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const todoRoute = (0, express_1.Router)();
//@ts-ignore
todoRoute.use("*", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ msg: "Authorization header missing" });
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(authHeader, "mysuperkey");
        req.userId = decoded.userId;
        yield next();
    }
    catch (error) {
        return res.status(403).json({
            msg: "There was an error",
        });
    }
}));
todoRoute.get('/allTodos', todoController_1.getAllTodos);
todoRoute.post('/createTodo', todoController_1.createTodo);
exports.default = todoRoute;
