import * as express from 'express'
import FoodController from '../controllers/Food'
import FoodSubTypeController from '../controllers/FoodSubType'
import FoodTypeController from '../controllers/FoodType'
class UserRouter {
  public router = express.Router()

  constructor (
    protected foodController = new FoodController(),
    protected foodTypeController = new FoodTypeController(),
    protected foodSubTypeController = new FoodSubTypeController()
  ) {
    this.routes()
  }

  routes (): void {
    this.router.get('/', this.foodController.getAll)
    this.router.put('/:id', this.foodController.updateMenu)
    this.router.get('/types', this.foodTypeController.getAll)
    this.router.get('/subtypes', this.foodSubTypeController.getAll)
    this.router.get('/checked', this.foodController.getAllChecked)
  }
}

export default new UserRouter().router
