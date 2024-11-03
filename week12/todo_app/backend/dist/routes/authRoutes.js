"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../controller/authController");
const authRoute = (0, express_1.Router)();
authRoute.route("/signup").post(authController_1.authSigup);
authRoute.post("/login", authController_1.authlogin);
authRoute.get("/getUsers", authController_1.getUsers);
exports.default = authRoute;
