"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const Order_1 = require("../controllers/Order");
const validateBody_1 = require("../middlewares/validateBody");
const schemas_1 = require("../schemas");
class OrderRouter {
    constructor(orderController = new Order_1.default()) {
        this.orderController = orderController;
        this.router = express.Router();
        this.routes();
    }
    routes() {
        this.router.get('/', this.orderController.getAll);
        this.router.post('/', (0, validateBody_1.default)(schemas_1.orderSchema), this.orderController.createOrder);
    }
}
exports.default = new OrderRouter().router;
//# sourceMappingURL=Order.js.map