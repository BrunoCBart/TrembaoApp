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
Object.defineProperty(exports, "__esModule", { value: true });
const Food_1 = require("../services/Food");
const Food_2 = require("../sockets/Food");
class FoodController {
    constructor(foodService = new Food_1.default()) {
        this.foodService = foodService;
        this.getAll = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const foods = yield this.foodService.getAll();
                return res.status(200).json(foods);
            }
            catch (err) {
                return next(err);
            }
        });
        this.getAllChecked = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const foods = yield this.foodService.getAllChecked();
                return res.status(200).json(foods);
            }
            catch (err) {
                return next(err);
            }
        });
        this.updateMenu = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { io } = req;
            try {
                const { food, error, code } = yield this.foodService.updateMenu(Number(id));
                if (error)
                    return res.status(code).json({ error });
                (0, Food_2.default)(io, food);
                io.emit('foodOption-updated', food);
                return res.status(200).json(food);
            }
            catch (err) {
                return next(err);
            }
        });
    }
}
exports.default = FoodController;
//# sourceMappingURL=Food.js.map