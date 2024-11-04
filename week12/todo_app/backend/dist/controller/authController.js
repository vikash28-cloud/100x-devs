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
exports.getUsers = exports.authlogin = exports.authSigup = void 0;
const client_1 = require("@prisma/client");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const zod_1 = require("zod");
const prisma = new client_1.PrismaClient();
const signupSchema = zod_1.z.object({
    name: zod_1.z.string(),
    email: zod_1.z.string().email(),
    password: zod_1.z.string(),
});
const authSigup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const zodSuccess = signupSchema.safeParse(req.body);
    if (!zodSuccess.success) {
        throw Error("Enter valid Credentials");
    }
    let user = yield prisma.user.findFirst({
        where: {
            email: req.body.email
        }
    });
    if (user) {
        throw Error("User already exists");
    }
    user = yield prisma.user.create({
        data: req.body
    });
    res.status(200).json({
        msg: "user registered successfully"
    });
});
exports.authSigup = authSigup;
const loginSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string(),
});
const authlogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const zodSuccess = loginSchema.safeParse(req.body);
    if (!zodSuccess.success) {
        throw Error("Enter valid Credentials");
    }
    let user = yield prisma.user.findFirst({
        where: {
            email: req.body.email
        }
    });
    if (req.body.password !== (user === null || user === void 0 ? void 0 : user.password)) {
        throw Error("enter correct email or password");
    }
    const token = jsonwebtoken_1.default.sign({ id: user === null || user === void 0 ? void 0 : user.id }, "mysuperkey");
    res.status(200).json({
        msg: "user logged in successfully",
        user: user === null || user === void 0 ? void 0 : user.name,
        token,
        key: true
    });
});
exports.authlogin = authlogin;
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let allUsers = yield prisma.user.findMany({});
    res.status(200).json({
        msg: "all users",
        allUsers
    });
});
exports.getUsers = getUsers;
