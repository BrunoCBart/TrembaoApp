import FoodService from '../services/Food'
import { RequestHandler } from 'express'
import addFoodToMenuSocket from '../sockets/Food'

class FoodController {
  constructor (protected foodService = new FoodService()) {}

  public getAllByTheme: RequestHandler = async (req, res, next):Promise<typeof res| void> => {
    const { id } = req.params
    try {
      const foods = await this.foodService.getAllByTheme(Number(id))
      return res.status(200).json(foods)
    } catch (err) {
      return next(err)
    }
  }

  public getAllThemes: RequestHandler = async (req, res, next):Promise<typeof res| void> => {
    try {
      const themes = await this.foodService.getAllThemes()
      return res.status(200).json(themes)
    } catch (err) {
      return next(err)
    }
  }

  public update: RequestHandler = async (req, res, next):Promise<typeof res| void> => {
    const { price, name, foodType, foodSubType } = req.body
    const { id } = req.params
    try {
      const updatedFood = await this.foodService.update(Number(id), { price, name, foodType, foodSubType })
      return res.status(200).json(updatedFood)
    } catch (err) {
      return next(err)
    }
  }

  public getAllFoods: RequestHandler = async (req, res, next):Promise<typeof res| void> => {
    try {
      const foods = await this.foodService.getAllFoods()
      return res.status(200).json(foods)
    } catch (err) {
      return next(err)
    }
  }

  public getFoodById: RequestHandler = async (req, res, next):Promise<typeof res| void> => {
    const { id } = req.params
    try {
      const food = await this.foodService.getFoodById(Number(id))
      return res.status(200).json(food)
    } catch (err) {
      return next(err)
    }
  }

  public create: RequestHandler = async (req, res, next):Promise<typeof res| void> => {
    const { name, price, foodType, foodSubType } = req.body
    try {
      const newFood = await this.foodService.create({ name, price, foodType, foodSubType })
      return res.status(200).json(newFood)
    } catch (err) {
      return next(err)
    }
  }

  public delete: RequestHandler = async (req, res, next):Promise<typeof res| void> => {
    const { id } = req.params
    try {
      const deletedFood = await this.foodService.delete(Number(id))
      return res.status(200).json(deletedFood)
    } catch (err) {
      return next(err)
    }
  }

  public updateMenu: RequestHandler = async (req, res, next):Promise<typeof res| void> => {
    const { id } = req.params
    const { io }: any = req
    try {
      const food = await this.foodService.updateMenu(Number(id))
      addFoodToMenuSocket(io, food)
      io.emit('foodOption-updated', food)
      return res.status(200).json(food)
    } catch (err) {
      return next(err)
    }
  }
}

export default FoodController
