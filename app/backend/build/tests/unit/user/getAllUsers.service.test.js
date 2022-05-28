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
describe('getAllUsers users testing from service', () => {
    const userService = new User_1.default();
    const users = [
        {
            id: 1,
            username: 'Bruno',
            password: 'kk3po2KSDO',
            admin: true
        },
        {
            id: 2,
            username: 'Marcos',
            password: 'kk3po2KSDO',
            admin: false
        }
    ];
    before(() => {
        sinon.stub(User_2.default, 'findAll').resolves(users);
    });
    it('getAllUsers returns an array of objects', () => __awaiter(void 0, void 0, void 0, function* () {
        const users = yield userService.getAll();
        expect(users).to.be.an('array');
        users.forEach((user) => {
            expect(user).to.be.an('object');
        });
    }));
    it('getAllUsers return objects with proper properties', () => {
        const users = userService.getAll();
        users.then((users) => {
            users.forEach((user) => {
                expect(user).to.have.property('id');
                expect(user).to.have.property('username');
                expect(user).to.have.property('password');
                expect(user).to.have.property('admin');
            });
        });
    });
});
//# sourceMappingURL=getAllUsers.service.test.js.map