"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Food_1 = require("./Food");
const FoodSubType_1 = require("./FoodSubType");
const FoodType_1 = require("./FoodType");
Food_1.default.belongsTo(FoodType_1.default, { foreignKey: 'foodTypeId', as: 'foodType' });
Food_1.default.belongsTo(FoodSubType_1.default, { foreignKey: 'foodSubTypeId', as: 'foodSubType' });
//# sourceMappingURL=associations.js.map