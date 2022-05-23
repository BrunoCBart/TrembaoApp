import * as express from 'express'
import FoodController from '../controllers/Food'

class UserRouter {
  public router = express.Router()

  constructor () {
    this.routes()
  }

  routes (): void {
    this.router.get('/', FoodController.getAllFoods)
    this.router.put('/:id', FoodController.updateMenu)
    this.router.get('/types', FoodController.getAllTypes)
    this.router.get('/subtypes', FoodController.getAllSubTypes)
  }
}

export default new UserRouter().router
