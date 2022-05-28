"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const User_1 = require("../controllers/User");
const middlewares_1 = require("../middlewares");
const validateBody_1 = require("../middlewares/validateBody");
const index_1 = require("../schemas/index");
class UserRouter {
    constructor(userController = new User_1.default()) {
        this.userController = userController;
        this.router = express.Router();
        this.routes();
    }
    routes() {
        this.router.get('/', this.userController.getAll);
        this.router.post('/', (0, validateBody_1.default)(index_1.userSchema), this.userController.create);
        this.router.post('/login', (0, validateBody_1.default)(index_1.loginSchema), this.userController.login);
        this.router.get('/login', middlewares_1.validateSession);
    }
}
exports.default = new UserRouter().router;
//# sourceMappingURL=User.js.map