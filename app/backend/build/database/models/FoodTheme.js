"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
class FoodTheme extends sequelize_1.Model {
}
FoodTheme.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    image: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    }
}, {
    timestamps: false,
    tableName: 'FoodThemes',
    sequelize: _1.default
});
exports.default = FoodTheme;
//# sourceMappingURL=FoodTheme.js.map