import * as joi from 'joi'

export const createFoodSchema = joi.object({
  name: joi.string().required().messages({
    'string.base': '400|Name should be a string',
    'string.empty': '400|Name can\'t be empty',
    'any.required': '400|Name is required'
  }),
  price: joi.number().messages({
    'number.base': '400|Price should be a number',
    'number.empty': '400|Price can\'t be empty'
  }),
  foodType: joi.string().required().messages({
    'string.base': '400|Food type should be a string',
    'string.empty': '400|Food type can\'t be empty',
    'any.required': '400|Food type is required'
  }),
  foodSubType: joi.string().messages({
    'string.base': '400|Food subtype should be a string',
    'string.empty': '400|Food subtype can\'t be empty'
  })
})

export const updateFoodSchema = joi.object({
  name: joi.string().messages({
    'string.base': '400|Name should be a string',
    'string.empty': '400|Name can\'t be empty'
  }),
  price: joi.number().messages({
    'number.base': '400|Price should be a number',
    'number.empty': '400|Price can\'t be empty'
  }),
  foodType: joi.string().messages({
    'string.base': '400|Food type should be a string',
    'string.empty': '400|Food type can\'t be empty'
  }),
  foodSubType: joi.string().allow(null, '')
})
