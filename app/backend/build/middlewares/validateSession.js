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
const jwt_1 = require("../utils/jwt");
const validateSession = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { cookies } = req;
    try {
        const token = cookies.TBsession;
        const isSessionValid = yield jwt_1.default.validateSession(token);
        if (!isSessionValid)
            return res.status(401).json({ error: 'Sessão expirada ou inválida' });
        return res.status(200).json({ token });
    }
    catch (e) {
        next(e);
    }
});
exports.default = validateSession;
//# sourceMappingURL=validateSession.js.map