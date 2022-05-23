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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const Food_1 = require("../services/Food");
class FoodController {
}
_a = FoodController;
FoodController.getAllTypes = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const types = yield Food_1.default.getAllTypes();
        return res.status(200).json(types);
    }
    catch (err) {
        next(err);
    }
});
FoodController.getAllSubTypes = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const subTypes = yield Food_1.default.getAllSubTypes();
        return res.status(200).json(subTypes);
    }
    catch (err) {
        next(err);
    }
});
FoodController.getAllFoods = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const foods = yield Food_1.default.getAllFoods();
        return res.status(200).json(foods);
    }
    catch (err) {
        next(err);
    }
});
FoodController.updateMenu = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { io } = req;
    try {
        const food = yield Food_1.default.updateMenu(Number(id));
        io.emit('foodOption-updated', food);
        return res.status(200).json(food);
    }
    catch (err) {
        next(err);
    }
});
exports.default = FoodController;
//# sourceMappingURL=Food.controller.js.map