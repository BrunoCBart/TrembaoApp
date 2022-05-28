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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Food_1 = require("../database/models/Food");
const District_1 = require("../database/models/District");
const Street_1 = require("../database/models/Street");
const Order_1 = require("../database/models/Order");
const FoodType_1 = require("../database/models/FoodType");
class OrderService {
    constructor() {
        this.mapOrdersFoods = (order) => {
            return Object.assign(Object.assign({}, order), { district: order.district.name, street: order.street.name, foods: order.foods.map(({ id, name, foodType }) => ({
                    id,
                    name,
                    foodType: foodType.name
                })) });
        };
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            const orders = yield Order_1.default.findAll();
            const mappedOrders = orders.map((order) => __awaiter(this, void 0, void 0, function* () {
                const _a = order.dataValues, { districtId, streetId } = _a, rest = __rest(_a, ["districtId", "streetId"]);
                return (Object.assign(Object.assign({}, rest), { district: yield District_1.default.findOne({ where: { id: districtId } }), street: yield Street_1.default.findOne({ where: { id: streetId } }), foods: yield Promise.all(yield Food_1.default.findAll({
                        where: {
                            name: order.foods
                        },
                        include: [
                            { model: FoodType_1.default, as: 'foodType' }
                        ]
                    })) }));
            }));
            const ordersResolved = yield Promise.all(mappedOrders);
            return ordersResolved.map(this.mapOrdersFoods);
        });
        this.createOrder = ({ name, phone, district, street, foods, number }) => __awaiter(this, void 0, void 0, function* () {
            let districtId;
            let streetId;
            const dbDistrict = yield District_1.default.findOne({ where: { name: district } });
            if (!dbDistrict) {
                const { dataValues: { id } } = yield District_1.default.create({ name: district });
                districtId = id;
            }
            else {
                districtId = dbDistrict.dataValues.id;
            }
            const dbStreet = yield Street_1.default.findOne({ where: { name: street } });
            if (!dbStreet) {
                const { dataValues: { id } } = yield Street_1.default.create({ name: street, districtId });
                streetId = id;
            }
            else {
                streetId = dbStreet.dataValues.id;
            }
            const order = yield Order_1.default.create({ name, phone, districtId, streetId, foods, number });
            return order;
        });
    }
}
exports.default = OrderService;
//# sourceMappingURL=Order.js.map