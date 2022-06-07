"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const Food_1 = require("../controllers/Food");
const FoodSubType_1 = require("../controllers/FoodSubType");
const FoodType_1 = require("../controllers/FoodType");
const schemas_1 = require("../schemas");
const validateBody_1 = require("../middlewares/validateBody");
class UserRouter {
    constructor(foodController = new Food_1.default(), foodTypeController = new FoodType_1.default(), foodSubTypeController = new FoodSubType_1.default()) {
        this.foodController = foodController;
        this.foodTypeController = foodTypeController;
        this.foodSubTypeController = foodSubTypeController;
        this.router = express.Router();
        this.routes();
    }
    routes() {
        this.router.get('/themes', this.foodController.getAllThemes);
        this.router.get('/themes/:id', this.foodController.getAllByTheme);
        this.router.get('/', this.foodController.getAllFoods);
        this.router.get('/subTypes', this.foodSubTypeController.getAll);
        this.router.get('/types', this.foodTypeController.getAll);
        this.router.get('/types/:id', this.foodTypeController.getTypesByTheme);
        this.router.post('/', (0, validateBody_1.default)(schemas_1.createFoodSchema), this.foodController.create);
        this.router.put('/:id', (0, validateBody_1.default)(schemas_1.updateFoodSchema), this.foodController.update);
        this.router.delete('/:id', this.foodController.delete);
        this.router.get('/:id', this.foodController.getFoodById);
        this.router.put('/:id/check', this.foodController.updateMenu);
    }
}
exports.default = new UserRouter().router;
//# sourceMappingURL=Food.js.map