import Food from '../database/models/Food'
import District from '../database/models/District'
import Street from '../database/models/Street'
import Order from '../database/models/Order'
import IOrder, { IOrderCreate } from '../interfaces/Order'
import FoodType from '../database/models/FoodType'

class OrderService {
  private mapOrdersFoods = (order: any) => {
    return {
      ...order,
      district: order.district.name,
      street: order.street.name,
      foods: order.foods.map(({ id, name, foodType }: any) => ({
        id,
        name,
        foodType: foodType.name
      }))
    }
  }

  public getAll = async () => {
    const orders: IOrder[] = await Order.findAll()
    const mappedOrders = orders.map(async (order: any) => {
      const { districtId, streetId, ...rest } = order.dataValues
      return ({
        ...rest,
        district: await District.findOne({ where: { id: districtId } }),
        street: await Street.findOne({ where: { id: streetId } }),
        foods: await Promise.all(await Food.findAll({
          where: {
            name: order.foods
          },
          include: [
            { model: FoodType, as: 'foodType' }
          ]
        }))
      })
    })

    const ordersResolved = await Promise.all(mappedOrders)
    return ordersResolved.map(this.mapOrdersFoods)
  }

  public createOrder = async (order: IOrderCreate) => {
    let districtId: number
    let streetId: number
    const dbDistrict: any = await District.findOne({ where: { name: order.district } })
    if (!dbDistrict) {
      const { dataValues: { id } }: any = await District.create({ name: order.district })
      districtId = id
    } else {
      districtId = dbDistrict.dataValues.id
    }
    const dbStreet: any = await Street.findOne({ where: { name: order.street } })
    if (!dbStreet) {
      const { dataValues: { id } }: any = await Street.create({ name: order.street, districtId })
      streetId = id
    } else {
      streetId = dbStreet.dataValues.id
    }
    const { street, district, ...currentOrder } = order
    const orderWithAdressIds = { ...currentOrder, streetId, districtId }
    const newOrder: Order = await Order.create(orderWithAdressIds)
    return newOrder
  }
}

export default OrderService
