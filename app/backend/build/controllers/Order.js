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
Object.defineProperty(exports, "__esModule", { value: true });
const Order_1 = require("../services/Order");
class OrderController {
    constructor(orderService = new Order_1.default()) {
        this.orderService = orderService;
        this.getAll = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const orders = yield this.orderService.getAll();
                return res.status(201).json(orders);
            }
            catch (err) {
                return next(err);
            }
        });
        this.createOrder = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { name, phone, district, street, foods, number } = req.body;
            const { io } = req;
            try {
                const order = yield this.orderService.createOrder({ name, phone, district, street, foods, number });
                io.emit('order-created', order);
                return res.status(201).json(order);
            }
            catch (err) {
                return next(err);
            }
        });
    }
}
exports.default = OrderController;
//# sourceMappingURL=Order.js.map