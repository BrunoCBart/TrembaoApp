"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Food_1 = require("./Food");
const FoodTheme_1 = require("./FoodTheme");
const FoodType_1 = require("./FoodType");
FoodType_1.default.hasMany(Food_1.default, { foreignKey: 'foodTypeId', as: 'foods' });
FoodType_1.default.belongsTo(FoodTheme_1.default, { foreignKey: 'foodThemeId', as: 'foodTheme' });
Food_1.default.belongsTo(FoodType_1.default, { foreignKey: 'foodTypeId', as: 'foodType' });
//# sourceMappingURL=associations.js.map