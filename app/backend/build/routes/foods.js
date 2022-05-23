"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const Food_controller_1 = require("../controllers/Food.controller");
const userRouter = express.Router();
userRouter.get('/', Food_controller_1.default.getAllFoods);
userRouter.put('/:id', Food_controller_1.default.updateMenu);
userRouter.get('/types', Food_controller_1.default.getAllTypes);
userRouter.get('/subtypes', Food_controller_1.default.getAllSubTypes);
exports.default = userRouter;
//# sourceMappingURL=foods.js.map