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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User_1 = require("../services/User");
const userService = new User_1.default();
dotenv.config();
const jwtConfig = {
    expiresIn: '1d',
    algorithm: 'HS256'
};
const secret = process.env.JWT_SECRET || 'secret';
class JwtUtils {
}
_a = JwtUtils;
JwtUtils.createToken = (payload) => {
    const token = jwt.sign(payload, secret, jwtConfig);
    return token;
};
JwtUtils.authUser = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield userService.findOne({ username });
    if (!user)
        return false;
    const pwIsValid = yield bcrypt.compare(password, user.password);
    if (!pwIsValid)
        return false;
    const { password: pw } = user, payload = __rest(user, ["password"]);
    const token = JwtUtils.createToken(payload);
    return token;
});
JwtUtils.validateSession = (token) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = JwtUtils.verifyToken(token);
    if (!payload)
        return false;
    const user = yield userService.findOne({ username: payload.dataValues.username });
    if (!user)
        return false;
    return true;
});
JwtUtils.verifyToken = (token) => {
    try {
        const decoded = jwt.decode(token, secret);
        if (!decoded || typeof decoded === 'string')
            throw new Error('Invalid token');
        return decoded;
    }
    catch (error) {
        return null;
    }
};
exports.default = JwtUtils;
//# sourceMappingURL=jwt.js.map