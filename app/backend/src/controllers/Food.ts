import FoodService from '../services/Food'
import { RequestHandler } from 'express'
import addFoodToMenuSocket from '../sockets/Food'

class FoodController {
  getAllTypes: RequestHandler = async (req, res, next):Promise<typeof res| void> => {
    try {
      const types = await FoodService.getAllTypes()
      return res.status(200).json(types)
    } catch (err) {
      return next(err)
    }
  }

  getAllSubTypes: RequestHandler = async (req, res, next):Promise<typeof res| void> => {
    try {
      const subTypes = await FoodService.getAllSubTypes()
      return res.status(200).json(subTypes)
    } catch (err) {
      return next(err)
    }
  }

  getAllFoods: RequestHandler = async (req, res, next):Promise<typeof res| void> => {
    try {
      const foods = await FoodService.getAllFoods()
      return res.status(200).json(foods)
    } catch (err) {
      return next(err)
    }
  }

  updateMenu: RequestHandler = async (req, res, next):Promise<typeof res| void> => {
    const { id } = req.params
    const { io }: any = req
    try {
      const { food, error, code } = await FoodService.updateMenu(Number(id))
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
