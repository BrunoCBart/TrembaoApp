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
const Food_1 = require("../database/models/Food");
const Order_1 = require("../database/models/Order");
class OrderService {
    constructor() {
        this.getAllOrders = () => __awaiter(this, void 0, void 0, function* () {
            const orders = yield Order_1.default.findAll();
            const mappedOrders = orders.map(({ foodIds, id }) => __awaiter(this, void 0, void 0, function* () {
                return ({
                    id,
                    foods: yield Promise.all(foodIds.map((id) => __awaiter(this, void 0, void 0, function* () { return yield Food_1.default.findByPk(id); })))
                });
            }));
            const ordersResolved = yield Promise.all(mappedOrders);
            return ordersResolved;
        });
        this.createOrder = (foodIds) => __awaiter(this, void 0, void 0, function* () {
            const order = yield Order_1.default.create({ foodIds });
            return order;
        });
    }
}
exports.default = new OrderService();
//# sourceMappingURL=Order.service.js.map