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
const FoodType_1 = require("../services/FoodType");
class FoodTypeController {
    constructor(foodService = new FoodType_1.default()) {
        this.foodService = foodService;
        this.getAll = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const types = yield this.foodService.getAll();
                return res.status(200).json(types);
            }
            catch (err) {
                return next(err);
            }
        });
    }
}
exports.default = FoodTypeController;
//# sourceMappingURL=FoodType.js.map