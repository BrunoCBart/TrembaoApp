"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFoodFromMenu = exports.updateFood = exports.updateFoodToMenu = void 0;
const updateFoodToMenu = (io, food) => {
    io.emit('foodOption-updated', food);
};
exports.updateFoodToMenu = updateFoodToMenu;
const updateFood = (io, food) => {
    io.emit('food-updated', food);
};
exports.updateFood = updateFood;
const deleteFoodFromMenu = (io, food) => {
    io.emit('foodOption-removed', food);
};
exports.deleteFoodFromMenu = deleteFoodFromMenu;
//# sourceMappingURL=Food.js.map