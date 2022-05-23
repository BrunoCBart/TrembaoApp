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
describe('getAllUsers route /users testing', () => {
    it('getAllUsers returns an array', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield chai.request(app_1.app).get('/users');
        expect(res.body).to.be.an('array');
    }));
    it('getAllUsers returns an array of objects', () => {
        chai.request(app_1.app)
            .get('/users')
            .then((res) => {
            res.body.forEach((user) => {
                expect(user).to.be.an('object');
            });
        });
    });
    it('getAllUsers return objects with proper properties', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield chai.request(app_1.app).get('/users');
        res.body.forEach((user) => {
            expect(user).to.have.property('id');
            expect(user).to.have.property('username');
            expect(user).to.have.property('password');
            expect(user).to.have.property('createdAt');
            expect(user).to.have.property('updatedAt');
        });
    }));
});
//# sourceMappingURL=getAllUsers.test.js.map