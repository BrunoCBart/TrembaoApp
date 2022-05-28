import FoodService from '../services/Food'
import { RequestHandler } from 'express'
import addFoodToMenuSocket from '../sockets/Food'

class FoodController {
  constructor (protected foodService = new FoodService()) {}

  getAll: RequestHandler = async (req, res, next):Promise<typeof res| void> => {
    try {
      const foods = await this.foodService.getAll()
      return res.status(200).json(foods)
    } catch (err) {
      return next(err)
    }
  }

  getAllChecked: RequestHandler = async (req, res, next):Promise<typeof res| void> => {
    try {
      const foods = await this.foodService.getAllChecked()
      return res.status(200).json(foods)
    } catch (err) {
      return next(err)
    }
  }

  updateMenu: RequestHandler = async (req, res, next):Promise<typeof res| void> => {
    const { id } = req.params
    const { io }: any = req
    try {
      const { food, error, code } = await this.foodService.updateMenu(Number(id))
      if (error) return res.status(code).json({ error })
      addFoodToMenuSocket(io, food)
      io.emit('foodOption-updated', food)
      return res.status(200).json(food)
    } catch (err) {
      return next(err)
    }
  }
}

export default FoodController
