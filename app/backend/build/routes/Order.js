"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const Order_1 = require("../controllers/Order");
const validateBody_1 = require("../middlewares/validateBody");
const schemas_1 = require("../schemas");
class OrderRouter {
    constructor() {
        this.router = express.Router();
        this.routes();
    }
    routes() {
        this.router.get('/', Order_1.default.getAllOrders);
        this.router.post('/', (0, validateBody_1.default)(schemas_1.orderSchema), Order_1.default.createOrder);
    }
}
exports.default = new OrderRouter().router;
//# sourceMappingURL=Order.js.map