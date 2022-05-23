"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const Food_1 = require("../controllers/Food");
class UserRouter {
    constructor() {
        this.router = express.Router();
        this.routes();
    }
    routes() {
        this.router.get('/', Food_1.default.getAllFoods);
        this.router.put('/:id', Food_1.default.updateMenu);
        this.router.get('/types', Food_1.default.getAllTypes);
        this.router.get('/subtypes', Food_1.default.getAllSubTypes);
    }
}
exports.default = new UserRouter().router;
//# sourceMappingURL=Food.js.map