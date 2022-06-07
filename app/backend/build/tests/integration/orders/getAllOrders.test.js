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
    name: 'Marcos',
    phone: '12345678901',
    district: 'Sao paulo',
    street: 'Rua dos bobos',
    foods: ['Arroz branco', 'Feijão preto'],
    number: 123
};
const foods = [
    { foodType: 'Arroz', id: 1, name: 'Arroz branco' },
    { foodType: 'Feijão', id: 5, name: 'Feijão preto' }
];
describe('getAll Orders route /orders testing', () => {
    it('getAll Orders return objects with proper properties', () => __awaiter(void 0, void 0, void 0, function* () {
        const resPost = yield chai.request(app_1.app).post('/orders')
            .type('json')
            .send(order);
        const user = resPost.body;
        expect(user).to.be.an('object');
        const res = yield chai.request(app_1.app).get('/orders');
        const i = user.id - 1;
        const orders = res.body;
        expect(orders).to.be.an('array');
        expect(orders).to.have.lengthOf(user.id);
        expect(orders[i]).to.have.property('id', user.id);
        expect(orders[i]).to.have.property('name', order.name);
        expect(orders[i]).to.have.property('phone', order.phone);
        expect(orders[i]).to.have.property('district', order.district);
        expect(orders[i]).to.have.property('street', order.street);
        expect(orders[i]).to.have.property('foods').to.be.an('array').to.deep.eq(foods);
        expect(orders[i]).to.have.property('number', order.number);
    }));
});
//# sourceMappingURL=getAllOrders.test.js.map