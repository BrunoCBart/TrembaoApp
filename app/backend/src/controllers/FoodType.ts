import FoodTypeService from '../services/FoodType'
import { RequestHandler } from 'express'

class FoodTypeController {
  constructor (protected foodService = new FoodTypeService()) {}
  getAll: RequestHandler = async (req, res, next):Promise<typeof res| void> => {
    try {
      const types = await this.foodService.getAll()
      return res.status(200).json(types)
    } catch (err) {
      return next(err)
    }
  }
}

export default FoodTypeController
