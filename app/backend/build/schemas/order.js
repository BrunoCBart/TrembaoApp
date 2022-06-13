"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const joi = require("joi");
const orderSchema = joi.object({
    name: joi.string().required().messages({
        'string.base': '400|name should be a string',
        'string.empty': '400|name can\'t be empty',
        'any.required': '400|name is required'
    }),
    phone: joi.string().required().messages({
        'string.base': '400|phone should be a string',
        'string.empty': '400|phone can\'t be empty',
        'any.required': '400|phone is required'
    }),
    foods: joi.array().items(joi.string()).required().messages({
        'array.base': '400|foodNames should be an array',
        'array.empty': '400|foodNames can\'t be empty',
        'any.required': '400|foodNames is required'
    }),
    number: joi.number().required().messages({
        'number.base': '400|number should be a number',
        'number.empty': '400|number can\'t be empty',
        'any.required': '400|number is required'
    }),
    district: joi.string().required().messages({
        'number.base': '400|district should be a string',
        'number.empty': '400|district can\'t be empty',
        'any.required': '400|district is required'
    }),
    street: joi.string().required().messages({
        'number.base': '400|street should be a string',
        'number.empty': '400|street can\'t be empty',
        'any.required': '400|street is required'
    }),
    reference: joi.string().optional().allow(null, '').messages({
        'string.base': '400|reference should be a string'
    })
});
exports.default = orderSchema;
//# sourceMappingURL=order.js.map