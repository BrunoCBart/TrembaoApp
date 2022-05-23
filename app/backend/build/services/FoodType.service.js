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
const FoodType_1 = require("../database/models/FoodType");
class FoodTypeService {
}
_a = FoodTypeService;
FoodTypeService.getAllTypes = () => __awaiter(void 0, void 0, void 0, function* () {
    const foodTypes = yield FoodType_1.default.findAll();
    return foodTypes;
});
exports.default = FoodTypeService;
//# sourceMappingURL=FoodType.service.js.map