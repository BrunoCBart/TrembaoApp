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
const chai = require("chai");
const sinon = require("sinon");
const User_1 = require("../../../services/User");
const User_2 = require("../../../database/models/User");
const { expect } = chai;
describe('findUser users testing from service', () => {
    const userService = new User_1.default();
    before(() => {
        const user = {
            id: 1,
            username: 'Bruno',
            password: 'kk3po2KSDO'
        };
        sinon.stub(User_2.default, 'findOne').resolves(user);
    });
    it('findUser returns and object with proper properties', () => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield userService.findOne({ id: 1 });
        expect(user).to.have.property('username');
        expect(user).to.have.property('password');
    }));
});
//# sourceMappingURL=findUser.service.test.js.map