"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const todosRoutes_1 = __importDefault(require("./routes/todosRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
// routes
app.use("/api/auth", authRoutes_1.default);
app.use("/api/todos", todosRoutes_1.default);
app.get('/', (req, res) => {
    res.send("hello world");
});
app.listen(3000, () => {
    console.log("server is running on port http://localhost:3000");
});
