import OrderService from '../services/Order'
import { RequestHandler } from 'express'
class OrderController {
  constructor (protected orderService = new OrderService()) {}
  public getAll: RequestHandler = async (req, res, next):Promise<typeof res| void> => {
    try {
      const orders = await this.orderService.getAll()
      return res.status(201).json(orders)
    } catch (err) {
      return next(err)
    }
  }

  public createOrder: RequestHandler = async (req, res, next):Promise<typeof res| void> => {
    const { name, phone, district, street, foods, number, reference } = req.body
    const { io }: any = req
    try {
      const order = await this.orderService.createOrder(
        { name, phone, district, street, foods, number, reference }
      )
      io.emit('order-created', order)
      return res.status(201).json(order)
    } catch (err) {
      return next(err)
    }
  }
}

export default OrderController
