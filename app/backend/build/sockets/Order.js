"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createOrder = (io, order) => {
    io.emit('order-created', order);
};
exports.default = createOrder;
//# sourceMappingURL=Order.js.map