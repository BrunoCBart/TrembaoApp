"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateFoodSchema = exports.createFoodSchema = exports.orderSchema = exports.userSchema = exports.loginSchema = void 0;
const login_1 = require("./login");
exports.loginSchema = login_1.default;
const user_1 = require("./user");
exports.userSchema = user_1.default;
const order_1 = require("./order");
exports.orderSchema = order_1.default;
const food_1 = require("./food");
Object.defineProperty(exports, "createFoodSchema", { enumerable: true, get: function () { return food_1.createFoodSchema; } });
Object.defineProperty(exports, "updateFoodSchema", { enumerable: true, get: function () { return food_1.updateFoodSchema; } });
//# sourceMappingURL=index.js.map