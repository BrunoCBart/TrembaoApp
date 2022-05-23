import * as joi from 'joi'

const loginSchema = joi.object({
  username: joi.string().required().messages({
    'string.base': '400|Username should be a string',
    'string.empty': '400|Username can\'t be empty',
    'any.required': '400|Username is required'
  }),
  password: joi.string().required().messages({
    'string.base': '400|Password should be a string',
    'string.empty': '400|Password can\'t be empty',
    'any.required': '400|Password is required'
  })
})

export default loginSchema
