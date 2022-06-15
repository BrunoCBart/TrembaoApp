"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateFoodSchema = exports.createFoodSchema = void 0;
const joi = require("joi");
exports.createFoodSchema = joi.object({
    name: joi.string().required().messages({
        'string.base': '400|name should be a string',
        'string.empty': '400|name can\'t be empty',
        'any.required': '400|name is required'
    }),
    price: joi.number().min(0).max(100).messages({
        'number.min': '400|price should be a number between 0 and 100',
        'number.max': '400|price should be a number between 0 and 100',
        'number.base': '400|price should be a number',
        'number.empty': '400|price can\'t be empty'
    }),
    foodType: joi.string().required().messages({
        'string.base': '400|foodType should be a string',
        'string.empty': '400|foodType can\'t be empty',
        'any.required': '400|foodType is required'
    })
});
exports.updateFoodSchema = joi.object({
    name: joi.string().required().messages({
        'string.base': '400|name should be a string',
        'string.empty': '400|name can\'t be empty',
        'any.required': '400|name is required'
    }),
    price: joi.number().required().messages({
        'number.base': '400|price should be a number',
        'number.empty': '400|price can\'t be empty',
        'any.required': '400|price is required'
    })
});
//# sourceMappingURL=food.js.map