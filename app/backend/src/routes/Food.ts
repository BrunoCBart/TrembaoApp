import * as express from 'express'
import FoodController from '../controllers/Food'
import FoodSubTypeController from '../controllers/FoodSubType'
import FoodTypeController from '../controllers/FoodType'
import { createFoodSchema, updateFoodSchema } from '../schemas'
import validateBody from '../middlewares/validateBody'

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
    this.router.post('/', validateBody(createFoodSchema), this.foodController.create)
    this.router.get('/all', this.foodController.getAllFoods)
    this.router.get('/checked', this.foodController.getAllChecked)
    this.router.get('/types', this.foodTypeController.getAll)
    this.router.get('/subtypes', this.foodSubTypeController.getAll)
    this.router.put('/:id', validateBody(updateFoodSchema), this.foodController.update)
    this.router.delete('/:id', this.foodController.delete)
    this.router.put('/:id/check', this.foodController.updateMenu)
  }
}

export default new UserRouter().router
