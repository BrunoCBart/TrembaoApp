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
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            const foods = yield FoodType_1.default.findAll({
                include: [
                    {
                        model: Food_1.default,
                        as: 'foods',
                        attributes: ['id', 'name', 'foodSubTypeId', 'checked', 'price']
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
                        attributes: ['id', 'name', 'checked', 'price']
                    }
                ],
                order: [
                    ['id', 'ASC']
                ]
            });
            return foods;
        });
        this.create = (food) => __awaiter(this, void 0, void 0, function* () {
            const { name, price, foodType, foodSubType } = food;
            const foodExists = yield Food_1.default.findOne({ where: { name } });
            if (foodExists)
                throw new Error('409|Food already exists');
            const { foodTypeId, foodSubTypeId } = yield this.doesfoodTypesExist(foodType, foodSubType);
            const newFood = yield Food_1.default.create({ name, price, foodTypeId, foodSubTypeId });
            return newFood;
        });
        this.getAllFoods = () => __awaiter(this, void 0, void 0, function* () {
            const foods = yield Food_1.default.findAll();
            return foods;
        });
        this.update = (id, fields) => __awaiter(this, void 0, void 0, function* () {
            const { name, price, foodType, foodSubType } = fields;
            const { foodTypeId, foodSubTypeId } = yield this.doesfoodTypesExist(foodType, foodSubType);
            const formatedFields = { name, price, foodTypeId, foodSubTypeId };
            const updatedFood = yield Food_1.default.update(formatedFields, { where: { id } });
            return updatedFood;
        });
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            const deletedFood = yield Food_1.default.destroy({ where: { id } });
            return deletedFood;
        });
        this.updateMenu = (id) => __awaiter(this, void 0, void 0, function* () {
            const food = yield Food_1.default.findByPk(id);
            if (!food)
                throw new Error('404|Food not found');
            food.checked = !food.checked;
            yield food.save();
            return food;
        });
        this.doesfoodTypesExist = (foodType, foodSubType) => __awaiter(this, void 0, void 0, function* () {
            let foodTypeId, foodSubTypeId;
            const foodTypeExists = yield FoodType_1.default.findOne({ where: { name: foodType || null } });
            if (foodTypeExists) {
                foodTypeId = foodTypeExists.id;
            }
            else if (foodType) {
                throw new Error('404|Food type not found');
            }
            const foodSubTypeExists = yield FoodSubType_1.default.findOne({ where: { name: foodSubType || null } });
            if (foodSubTypeExists) {
                foodSubTypeId = foodSubTypeExists.id;
            }
            else if (foodSubType) {
                throw new Error('404|Food sub type not found');
            }
            return { foodTypeId, foodSubTypeId };
        });
    }
}
exports.default = FoodService;
//# sourceMappingURL=Food.js.map