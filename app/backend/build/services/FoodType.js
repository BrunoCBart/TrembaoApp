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
const FoodType_1 = require("../database/models/FoodType");
class FoodTypeService {
    constructor() {
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            const types = yield FoodType_1.default.findAll();
            return types;
        });
        this.getTypesByTheme = (foodThemeId) => __awaiter(this, void 0, void 0, function* () {
            const types = yield FoodType_1.default.findAll({
                where: { foodThemeId }
            });
            return types;
        });
    }
}
exports.default = FoodTypeService;
//# sourceMappingURL=FoodType.js.map