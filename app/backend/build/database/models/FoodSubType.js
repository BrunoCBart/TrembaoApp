"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
class FoodSubType extends sequelize_1.Model {
}
FoodSubType.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    timestamps: false,
    tableName: 'FoodSubTypes',
    sequelize: _1.default
});
exports.default = FoodSubType;
//# sourceMappingURL=FoodSubType.js.map