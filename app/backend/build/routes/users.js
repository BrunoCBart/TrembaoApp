"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const User_controller_1 = require("../controllers/User.controller");
const middlewares_1 = require("../middlewares");
const userRouter = express.Router();
userRouter.get('/', User_controller_1.default.getAll);
userRouter.post('/', User_controller_1.default.createUser);
userRouter.post('/login', User_controller_1.default.login);
userRouter.get('/login', middlewares_1.validateSession);
exports.default = userRouter;
//# sourceMappingURL=users.js.map