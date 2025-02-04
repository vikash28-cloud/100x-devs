"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// middlwares
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({
    origin: "http://localhost:5173",
    credentials: true
}));
// api Routes
// signin
app.post("/signin", (req, res) => {
    const _email = req.body.email;
    const _password = req.body.password;
    // check and validate email and password from db
    // generate token
    const token = jsonwebtoken_1.default.sign({ id: 1 }, "mySeceretKey");
    // send response and cookie to the user
    res.cookie("token", token);
    res.send("signin successfully");
});
// protected api route
app.get("/users", (req, res) => {
    // first verify the token
    const token = req.cookies.token;
    if (!token) {
        res.json({
            msg: "Unauthorized User, first login"
        });
        return;
    }
    // verify the token
    const decoded = jsonwebtoken_1.default.verify(token, "mySeceretKey");
    res.json({
        userId: decoded.id,
        msg: "now you can access the protected route"
    });
});
// logout Route
app.get("/logout", (req, res) => {
    res.clearCookie("token");
    res.send("logout successfully");
});
app.listen(8000, () => {
    console.log("server is running on port http://localhost:8000");
});
