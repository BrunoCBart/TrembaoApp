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
// import FoodSubType from '../database/models/FoodSubType'
const FoodType_1 = require("../database/models/FoodType");
class FoodService {
    constructor() {
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            const foods = yield FoodType_1.default.findAll({
                include: [
                    {
                        model: Food_1.default,
                        as: 'foods',
                        attributes: ['id', 'name', 'foodSubTypeId']
                    }
                ],
                order: [
                    ['id', 'ASC']
                ]
            });
            return foods;
        });
        this.getAllChecked = () => __awaiter(this, void 0, void 0, function* () {
            const foods = yield FoodType_1.default.findAll({
                include: [
                    {
                        model: Food_1.default,
                        as: 'foods',
                        where: { checked: true },
                        attributes: ['id', 'name', 'checked']
                    }
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
                return { error: 'Food not found', code: 404 };
            food.checked = !food.checked;
            yield food.save();
            return { food };
        });
    }
}
exports.default = FoodService;
//# sourceMappingURL=Food.js.map