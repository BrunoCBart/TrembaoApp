import FoodService from '../services/Food'
import { RequestHandler } from 'express'
import addFoodToMenuSocket from '../sockets/Food'

class FoodController {
  static getAllTypes: RequestHandler = async (req, res, next) => {
    try {
      const types = await FoodService.getAllTypes()
      return res.status(200).json(types)
    } catch (err) {
      next(err)
    }
  }

  static getAllSubTypes: RequestHandler = async (req, res, next) => {
    try {
      const subTypes = await FoodService.getAllSubTypes()
      return res.status(200).json(subTypes)
    } catch (err) {
      next(err)
    }
  }

  static getAllFoods: RequestHandler = async (req, res, next) => {
    try {
      const foods = await FoodService.getAllFoods()
      return res.status(200).json(foods)
    } catch (err) {
      next(err)
    }
  }

  static updateMenu: RequestHandler = async (req, res, next) => {
    const { id } = req.params
    const { io }: any = req
    try {
      const food = await FoodService.updateMenu(Number(id))
      addFoodToMenuSocket(io, food)
      io.emit('foodOption-updated', food)
      return res.status(200).json(food)
    } catch (err) {
      next(err)
    }
  }
}

export default FoodController
