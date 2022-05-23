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
const FoodSubType_1 = require("../database/models/FoodSubType");
class FoodSubTypeService {
}
_a = FoodSubTypeService;
FoodSubTypeService.getAllSubTypes = () => __awaiter(void 0, void 0, void 0, function* () {
    const foodSubTypes = yield FoodSubType_1.default.findAll();
    return foodSubTypes;
});
exports.default = FoodSubTypeService;
//# sourceMappingURL=FoodSubType.service.js.map