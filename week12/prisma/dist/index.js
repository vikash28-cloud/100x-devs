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
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function createUser(username, email, password, firstname, lastname) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.create({
            data: {
                username,
                email,
                password,
                firstname,
                lastname
            }
        });
        console.log(res);
    });
}
function CreateTodo(title, desc) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.todo.create({
            data: {
                title,
                description: desc,
                userId: 100,
                done: false
            }
        });
        console.log(res);
    });
}
function getTodos() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.todo.findMany({
            where: {
                userId: 1
            },
            select: {
                id: true,
                done: true,
                title: true,
                user: true
            }
        });
        console.log(res);
    });
}
// change parameters
// createUser("ssvikash2896","visskash@gmail.com","2xsseye8","vssikash","sssharma");
CreateTodo("test1", "jioej roe er oie ropei roe");
// getTodos();
