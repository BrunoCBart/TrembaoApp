"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const Order_controller_1 = require("../controllers/Order.controller");
const orderRouter = express.Router();
orderRouter.get('/', Order_controller_1.default.getAllOrders);
orderRouter.post('/makeOrder', Order_controller_1.default.createOrder);
exports.default = orderRouter;
//# sourceMappingURL=orders.js.map