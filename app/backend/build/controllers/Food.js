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
        this.update = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { price, name, foodType, foodSubType } = req.body;
            const { id } = req.params;
            try {
                const updatedFood = yield this.foodService.update(Number(id), { price, name, foodType, foodSubType });
                return res.status(200).json(updatedFood);
            }
            catch (err) {
                return next(err);
            }
        });
        this.getAllFoods = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const foods = yield this.foodService.getAllFoods();
                return res.status(200).json(foods);
            }
            catch (err) {
                return next(err);
            }
        });
        this.create = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { name, price, foodType, foodSubType } = req.body;
            try {
                const newFood = yield this.foodService.create({ name, price, foodType, foodSubType });
                return res.status(200).json(newFood);
            }
            catch (err) {
                return next(err);
            }
        });
        this.delete = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const deletedFood = yield this.foodService.delete(Number(id));
                return res.status(200).json(deletedFood);
            }
            catch (err) {
                return next(err);
            }
        });
        this.updateMenu = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { io } = req;
            try {
                const food = yield this.foodService.updateMenu(Number(id));
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