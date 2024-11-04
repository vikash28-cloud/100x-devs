"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const todosRoutes_1 = __importDefault(require("./routes/todosRoutes"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // Adjust this to restrict to certain origins in production
    res.header("Access-Control-Allow-Headers", "Authorization, Content-Type");
    next();
});
app.use(express_1.default.json());
// routes
app.use("/api/auth", authRoutes_1.default);
app.use("/api/todos", todosRoutes_1.default);
app.get("/", (req, res) => {
    res.send("hello world");
});
app.listen(3000, () => {
    console.log("server is running on port http://localhost:3000");
});
