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
const order = {
    name: 'Bruno',
    phone: '12345678901',
    district: 'Sao paulo',
    street: 'Rua dos bobos',
    foods: ['Arroz branco', 'Feijão preto'],
    number: 123
};
describe('create Order route /orders testing', () => {
    it('create Order return objects with proper properties', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield chai.request(app_1.app).post('/orders')
            .type('json')
            .send(order);
        const user = res.body;
        expect(user).to.be.an('object');
        expect(user).to.have.property('id', 1);
        expect(user).to.have.property('name', order.name);
        expect(user).to.have.property('phone', order.phone);
        expect(user).to.have.property('districtId', 1);
        expect(user).to.have.property('streetId', 1);
        expect(user).to.have.property('foods').to.be.an('array').to.deep.eq(order.foods);
        expect(user).to.have.property('number', order.number);
    }));
});
//# sourceMappingURL=createOrder.test.js.map