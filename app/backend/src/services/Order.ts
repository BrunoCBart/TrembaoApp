import Food from '../database/models/Food'
import District from '../database/models/District'
import Street from '../database/models/Street'
import Order from '../database/models/Order'
import IOrder from '../interfaces/Order'
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

  public getAllOrders = async () => {
    const orders = await Order.findAll()
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

  public createOrder = async ({ name, phone, district, street, foods, number }: IOrder) => {
    let districtId: number
    let streetId: number
    const dbDistrict: any = await District.findOne({ where: { name: district } })
    if (!dbDistrict) {
      const { dataValues: { id } }: any = await District.create({ name: district })
      districtId = id
    } else {
      districtId = dbDistrict.dataValues.id
    }
    const dbStreet: any = await Street.findOne({ where: { name: street } })
    if (!dbStreet) {
      const { dataValues: { id } }: any = await Street.create({ name: street, districtId })
      streetId = id
    } else {
      streetId = dbStreet.dataValues.id
    }
    const order = await Order.create({ name, phone, districtId, streetId, foods, number })
    return order
  }
}

export default new OrderService()
