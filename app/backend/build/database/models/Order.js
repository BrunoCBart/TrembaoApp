"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
class Order extends sequelize_1.Model {
}
Order.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    districtId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    streetId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    foods: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.INTEGER),
        allowNull: false
    },
    number: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    reference: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE
    }
}, {
    timestamps: false,
    tableName: 'Orders',
    sequelize: _1.default
});
exports.default = Order;
//# sourceMappingURL=Order.js.map