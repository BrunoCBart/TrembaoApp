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
describe('POST /foods', () => {
    let lastIndex;
    afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield chai.request(app_1.app).delete(`/foods/${lastIndex}`);
    }));
    it('Food should be created', () => __awaiter(void 0, void 0, void 0, function* () {
        yield chai.request(app_1.app).post('/foods').send(food_1.createFood);
        const res = yield chai.request(app_1.app).get('/foods/');
        lastIndex = res.body.length - 1;
        expect(res.body[lastIndex].name).to.equal(food_1.createFood.name);
        expect(res.body[lastIndex].foodTypeId).to.equal(1);
    }));
});
//# sourceMappingURL=create.test.js.map