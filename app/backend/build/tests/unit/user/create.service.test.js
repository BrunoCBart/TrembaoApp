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
// jest.mock('../../../services/User')
const { expect } = chai;
describe('createUser users testing from service', () => {
    const userService = new User_1.default();
    const newUser = {
        id: 1,
        username: 'Marcos',
        password: 'kk3po2KSDO',
        admin: false
    };
    before(() => {
        sinon.stub(User_2.default, 'create').resolves(newUser);
    });
    it('createUser returns and object with proper properties', () => __awaiter(void 0, void 0, void 0, function* () {
        const users = yield userService.create({ username: 'Marcos', password: 'kk3po2KSDO' });
        expect(users).to.be.an('object');
        expect(users).to.have.property('id');
        expect(users).to.have.property('username');
        expect(users).to.have.property('password');
        expect(users).to.have.property('admin');
    }));
});
//# sourceMappingURL=create.service.test.js.map