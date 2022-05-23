import OrderService from '../services/Order'
import { RequestHandler } from 'express'
class OrderController {
  static getAllOrders: RequestHandler = async (req, res, next) => {
    try {
      const orders = await OrderService.getAllOrders()
      return res.status(201).json(orders)
    } catch (err) {
      next(err)
    }
  }

  static createOrder: RequestHandler = async (req, res, next) => {
    const { name, phone, district, street, foods, number } = req.body
    const { io }: any = req
    try {
      const order = await OrderService.createOrder(
        { name, phone, district, street, foods, number }
      )
      io.emit('order-created', order)
      return res.status(201).json(order)
    } catch (err) {
      next(err)
    }
  }
}

export default OrderController
