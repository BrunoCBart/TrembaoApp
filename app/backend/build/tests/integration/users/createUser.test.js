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
const chaiHttp = require("chai-http");
const app_1 = require("../../../app");
require("mocha");
const { expect } = chai;
chai.use(chaiHttp);
describe('createUser route /users testing', () => {
    it('createUser returns an array', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield chai.request(app_1.app).post('/users')
            .type('json')
            .send({
            username: 'Bruno',
            password: 'kk3po2KSDO',
            admin: false
        });
        expect(res.body).to.be.an('object');
    }));
    it('createUser return objects with proper properties', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield chai.request(app_1.app).post('/users')
            .type('json')
            .send({
            username: 'Bruno2',
            password: 'kk3po2KSDO',
            admin: true
        });
        const user = res.body;
        expect(user).to.have.property('id');
        expect(user).to.have.property('username');
        expect(user).to.have.property('password');
        expect(user).to.have.property('createdAt');
        expect(user).to.have.property('updatedAt');
    }));
});
//# sourceMappingURL=createUser.test.js.map