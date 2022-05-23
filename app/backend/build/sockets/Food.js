"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addFoodToMenu = (io, food) => {
    io.emit('foodOption-updated', food);
};
exports.default = addFoodToMenu;
//# sourceMappingURL=Food.js.map