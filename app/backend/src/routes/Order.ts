import * as express from 'express'
import OrderController from '../controllers/Order'
import validateBody from '../middlewares/validateBody'
import { orderSchema } from '../schemas'

class OrderRouter {
  public router = express.Router()

  constructor (protected orderController = new OrderController()) {
    this.routes()
  }

  routes (): void {
    this.router.get('/', this.orderController.getAll)
    this.router.post('/', validateBody(orderSchema), this.orderController.createOrder)
  }
}

export default new OrderRouter().router
