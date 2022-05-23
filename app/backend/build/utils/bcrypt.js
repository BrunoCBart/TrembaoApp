"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcrypt");
class BcryptUtils {
}
BcryptUtils.generateSalt = () => bcrypt.genSaltSync(10, 'a');
BcryptUtils.hash = (pw, salt = BcryptUtils.generateSalt()) => bcrypt.hashSync(pw, salt);
BcryptUtils.compare = (pw, hashPw) => bcrypt.compare(pw, hashPw);
exports.default = BcryptUtils;
//# sourceMappingURL=bcrypt.js.map