"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todoController_1 = require("../controller/todoController");
const todoRoute = (0, express_1.Router)();
todoRoute.get('/allTodos', todoController_1.getAllTodos);
todoRoute.post('/createTodo', todoController_1.createTodo);
exports.default = todoRoute;
