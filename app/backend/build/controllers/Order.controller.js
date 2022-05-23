"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const Order_1 = require("../services/Order");
class OrderController {
}
_a = OrderController;
OrderController.getAllOrders = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orders = yield Order_1.default.getAllOrders();
        return res.status(201).json(orders);
    }
    catch (err) {
        next(err);
    }
});
OrderController.createOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { foodIds } = req.body;
    try {
        const order = yield Order_1.default.createOrder(foodIds);
        return res.status(201).json(order);
    }
    catch (err) {
        next(err);
    }
});
exports.default = OrderController;
//# sourceMappingURL=Order.controller.js.map