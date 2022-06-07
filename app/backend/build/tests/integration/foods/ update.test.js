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
const food_1 = require("../../mocks/food");
const { expect } = chai;
chai.use(chaiHttp);
describe('PUT /foods/:id', () => {
    afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield chai.request(app_1.app).put('/foods/1').send(food_1.firstFood);
    }));
    it('Update first food should return proper values', () => __awaiter(void 0, void 0, void 0, function* () {
        yield chai.request(app_1.app).put('/foods/1')
            .send(food_1.updatedFood);
        const res = yield chai.request(app_1.app).get('/foods/1');
        expect(res.body.name).to.equal('Pizza');
        expect(res.body.price).to.equal(10);
    }));
});
//# sourceMappingURL=%20update.test.js.map