import * as express from 'express'
import OrderController from '../controllers/Order'
import validateBody from '../middlewares/validateBody'
import { orderSchema } from '../schemas'

class OrderRouter {
  public router = express.Router()

  constructor () {
    this.routes()
  }

  routes (): void {
    this.router.get('/', OrderController.getAllOrders)
    this.router.post('/', validateBody(orderSchema), OrderController.createOrder)
  }
}

export default new OrderRouter().router
