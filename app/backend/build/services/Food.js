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
                        foodSubType: food.foodSubType === null ? null : food.foodSubType.name,
                        foodSubTypeId: food.foodSubTypeId,
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
                            { model: FoodSubType_1.default, as: 'foodSubType' },
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
            const { name, price, foodType, foodSubType } = food;
            const foodExists = yield Food_1.default.findOne({ where: { name } });
            if (foodExists)
                return { code: 409, error: 'Food already exists' };
            const { foodTypeId, foodSubTypeId } = yield this.doesfoodTypesExist(foodType, foodSubType);
            const newFood = yield Food_1.default.create({ name, price, foodTypeId, foodSubTypeId });
            return newFood;
        });
        this.allFoodsMap = (food) => ({
            id: food.id,
            name: food.name,
            price: food.price,
            checked: food.checked,
            foodType: food['foodType.name'],
            foodTypeId: food['foodType.id'],
            foodSubType: food['foodSubType.name'],
            foodSubTypeId: food['foodSubType.id']
        });
        this.getAllFoods = () => __awaiter(this, void 0, void 0, function* () {
            const foods = yield Food_1.default.findAll({
                raw: true,
                include: [
                    { model: FoodType_1.default, as: 'foodType' },
                    { model: FoodSubType_1.default, as: 'foodSubType' }
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
        this.update = (id, fields) => __awaiter(this, void 0, void 0, function* () {
            const { name, price, foodType, foodSubType } = fields;
            const { foodTypeId, foodSubTypeId, error, code } = yield this.doesfoodTypesExist(foodType, foodSubType);
            if (error)
                return { code, error };
            const formatedFields = { name, price, foodTypeId, foodSubTypeId };
            const food = yield Food_1.default.findOne({ where: { id } });
            if (!food)
                return { code: 404, error: 'Food not found' };
            food.update(formatedFields);
            return food;
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
        this.doesfoodTypesExist = (foodType, foodSubType) => __awaiter(this, void 0, void 0, function* () {
            let foodTypeId;
            let foodSubTypeId;
            const foodTypeExists = yield FoodType_1.default.findOne({ where: { name: foodType || null } });
            if (foodTypeExists) {
                foodTypeId = foodTypeExists.id;
            }
            else if (foodType) {
                return { code: 404, error: 'Food type not found' };
            }
            const foodSubTypeExists = yield FoodSubType_1.default.findOne({ where: { name: foodSubType || null } });
            if (foodSubTypeExists) {
                foodSubTypeId = foodSubTypeExists.id;
            }
            else if (foodSubType) {
                return { code: 404, error: 'Food sub type not found' };
            }
            return { foodTypeId, foodSubTypeId };
        });
    }
}
exports.default = FoodService;
//# sourceMappingURL=Food.js.map