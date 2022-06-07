"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
class Food extends sequelize_1.Model {
}
Food.init({
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
    foodTypeId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    foodSubTypeId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    },
    onMenu: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    },
    price: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    }
}, {
    timestamps: false,
    tableName: 'Foods',
    sequelize: _1.default
});
exports.default = Food;
//# sourceMappingURL=Food.js.map