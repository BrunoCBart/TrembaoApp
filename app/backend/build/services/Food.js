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
const FoodTheme_1 = require("../database/models/FoodTheme");
const FoodType_1 = require("../database/models/FoodType");
class FoodService {
    constructor() {
        this.getAllByThemeMap = ({ dataValues: foodTypes }) => {
            return Object.assign(Object.assign({}, foodTypes), { foodTheme: foodTypes.foodTheme.name, foods: foodTypes.foods.map((food) => {
                    return {
                        id: food.id,
                        name: food.name,
                        price: food.price,
                        foodType: food.foodType.name,
                        foodTypeId: food.foodTypeId,
                        onMenu: food.onMenu
                    };
                }) });
        };
        this.getAllByTheme = (foodThemeId) => __awaiter(this, void 0, void 0, function* () {
            const foods = yield FoodType_1.default.findAll({
                where: { foodThemeId },
                include: [
                    { model: FoodTheme_1.default, as: 'foodTheme' },
                    {
                        model: Food_1.default,
                        as: 'foods',
                        include: [
                            { model: FoodType_1.default, as: 'foodType' }
                        ]
                    }
                ]
            });
            if (foods.length === 0)
                return { code: 404, error: 'No themes or types found' };
            return foods.map(this.getAllByThemeMap);
        });
        this.getAllThemes = () => __awaiter(this, void 0, void 0, function* () {
            const themes = yield FoodTheme_1.default.findAll();
            return themes;
        });
        this.create = (food) => __awaiter(this, void 0, void 0, function* () {
            const { name, price, foodType } = food;
            const foodExists = yield Food_1.default.findOne({ where: { name } });
            if (foodExists)
                return { code: 409, error: 'Food already exists' };
            const foodTypeId = yield this.doesfoodTypesExist(foodType);
            const newFood = yield Food_1.default.create({ name, price, foodTypeId });
            return newFood;
        });
        this.allFoodsMap = (food) => ({
            id: food.id,
            name: food.name,
            price: food.price,
            checked: food.checked,
            foodType: food['foodType.name'],
            foodTypeId: food['foodType.id']
        });
        this.getAllFoods = () => __awaiter(this, void 0, void 0, function* () {
            const foods = yield Food_1.default.findAll({
                raw: true,
                include: [
                    { model: FoodType_1.default, as: 'foodType' }
                ]
            });
            return foods.map(this.allFoodsMap);
        });
        this.getFoodById = (foodId) => __awaiter(this, void 0, void 0, function* () {
            const food = yield Food_1.default.findOne({ where: { id: foodId } });
            if (!food)
                return { code: 404, error: 'Food not found' };
            return food;
        });
        this.formatUpdatedFood = ({ dataValues: food }) => (Object.assign(Object.assign({}, food), { foodType: food.foodType.name, foodSubType: food.foodSubType ? food.foodSubType.name : null }));
        this.update = (id, fields) => __awaiter(this, void 0, void 0, function* () {
            const { name, price } = fields;
            const food = yield Food_1.default.findOne({
                where: { id },
                include: [
                    { model: FoodType_1.default, as: 'foodType' }
                ]
            });
            if (!food)
                return { code: 404, error: 'Food not found' };
            food.update({ name, price });
            const updatedFood = this.formatUpdatedFood(food);
            return updatedFood;
        });
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            const food = yield Food_1.default.findOne({ where: { id } });
            if (!food)
                return { code: 404, error: 'Food not found' };
            food.destroy();
            return food;
        });
        this.updateMenu = (id) => __awaiter(this, void 0, void 0, function* () {
            const food = yield Food_1.default.findByPk(id);
            if (!food)
                return { code: 404, error: 'Food not found' };
            food.onMenu = !food.onMenu;
            yield food.save();
            return food;
        });
        this.doesfoodTypesExist = (foodType) => __awaiter(this, void 0, void 0, function* () {
            const foodTypeExists = yield FoodType_1.default.findOne({ where: { name: foodType || null } });
            if (!foodTypeExists)
                return { code: 404, error: 'Food type not found' };
            return foodTypeExists.id;
        });
    }
}
exports.default = FoodService;
//# sourceMappingURL=Food.js.map