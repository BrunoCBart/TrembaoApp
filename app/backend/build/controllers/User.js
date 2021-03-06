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
const User_1 = require("../services/User");
const jwt_1 = require("../utils/jwt");
class UserController {
    constructor(userService = new User_1.default()) {
        this.userService = userService;
        this.getAll = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield this.userService.getAll();
                return res.status(200).json(users);
            }
            catch (err) {
                return next(err);
            }
        });
        this.create = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { username, password, admin } = req.body;
                const user = yield this.userService.create({ username, password, admin });
                return res.status(201).json(user);
            }
            catch (err) {
                return next(err);
            }
        });
        this.login = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { username, password } = req.body;
                if (!username || !password)
                    return res.status(400).json({ error: 'Campo username e password são obrigatórios' });
                const token = yield jwt_1.default.authUser(username, password);
                if (!token)
                    return res.status(401).json({ error: 'Não autorizado' });
                return res.cookie('TBsession', token).status(200).json({ token });
            }
            catch (err) {
                return next(err);
            }
        });
    }
}
exports.default = UserController;
//# sourceMappingURL=User.js.map