import * as joi from 'joi'

const orderSchema = joi.object({
  name: joi.string().required().messages({
    'string.base': '400|Name should be a string',
    'string.empty': '400|Name can\'t be empty',
    'any.required': '400|Name is required'
  }),
  phone: joi.string().required().messages({
    'string.base': '400|Phone should be a string',
    'string.empty': '400|Phone can\'t be empty',
    'any.required': '400|Phone is required'
  }),
  foods: joi.array().items(joi.string()).required().messages({
    'array.base': '400|FoodNames should be an array',
    'array.empty': '400|FoodNames can\'t be empty',
    'any.required': '400|FoodNames is required'
  }),
  number: joi.number().required().messages({
    'number.base': '400|Number should be a number',
    'number.empty': '400|Number can\'t be empty',
    'any.required': '400|Number is required'
  }),
  district: joi.string().required().messages({
    'number.base': '400|District should be a string',
    'number.empty': '400|District can\'t be empty',
    'any.required': '400|District is required'
  }),
  street: joi.string().required().messages({
    'number.base': '400|Street should be a string',
    'number.empty': '400|Street can\'t be empty',
    'any.required': '400|Street is required'
  })

})

export default orderSchema
