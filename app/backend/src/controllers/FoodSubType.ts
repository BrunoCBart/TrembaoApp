import FoodSubTypeService from '../services/FoodSubType'
import { RequestHandler } from 'express'

class FoodSubTypeController {
  constructor (protected foodSubTypeService = new FoodSubTypeService()) {}
  getAll: RequestHandler = async (req, res, next):Promise<typeof res| void> => {
    try {
      const subTypes = await this.foodSubTypeService.getAll()
      return res.status(200).json(subTypes)
    } catch (err) {
      return next(err)
    }
  }
}

export default FoodSubTypeController
