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
const Food_1 = require("../database/models/Food");
const FoodSubType_1 = require("../database/models/FoodSubType");
const FoodType_1 = require("../database/models/FoodType");
class FoodService {
    constructor() {
        this.getAllTypes = () => __awaiter(this, void 0, void 0, function* () {
            const types = yield FoodType_1.default.findAll();
            return types;
        });
        this.getAllSubTypes = () => __awaiter(this, void 0, void 0, function* () {
            const subTypes = yield FoodSubType_1.default.findAll();
            return subTypes;
        });
        this.getAllFoods = () => __awaiter(this, void 0, void 0, function* () {
            const foods = yield FoodType_1.default.findAll({
                include: [
                    { model: Food_1.default, as: 'foods' }
                ],
                order: [
                    ['id', 'ASC']
                ]
            });
            return foods;
        });
        this.updateMenu = (id) => __awaiter(this, void 0, void 0, function* () {
            const food = yield Food_1.default.findByPk(id);
            if (!food)
                throw new Error('Food not found');
            food.checked = !food.checked;
            yield food.save();
            return food;
        });
    }
}
exports.default = new FoodService();
//# sourceMappingURL=Food.service.js.map