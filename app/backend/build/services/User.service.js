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
const User_1 = require("../database/models/User");
class UserService {
    constructor() {
        this.getAllUsers = () => __awaiter(this, void 0, void 0, function* () {
            const users = yield User_1.default.findAll();
            return users;
        });
        this.createUser = (userData) => __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.default.create(userData);
            return user;
        });
        this.findUser = (userCredentials) => __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.default.findOne({ where: userCredentials });
            return user;
        });
    }
}
exports.default = new UserService();
//# sourceMappingURL=User.service.js.map