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
describe('GET /foods/themes and /foods/themes/:id', () => {
    it('getAllThemes returns an array with proper properties', () => __awaiter(void 0, void 0, void 0, function* () {
    }));
    it('getAllThemes returns an array with proper properties', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield chai.request(app_1.app).get('/foods/themes');
        expect(res.body).to.be.an('array');
        res.body.forEach((theme) => {
            expect(theme).to.have.property('id');
            expect(theme).to.have.property('name');
            expect(theme).to.have.property('image');
        });
    }));
});
//# sourceMappingURL=themes.test.js.map