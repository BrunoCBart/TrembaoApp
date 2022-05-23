import Food from '../database/models/Food'
import FoodSubType from '../database/models/FoodSubType'
import FoodType from '../database/models/FoodType'
import IFoodType from '../interfaces/Food'

class FoodService {
  public getAllTypes = async () => {
    const types: IFoodType[] = await FoodType.findAll()
    return types
  }

  public getAllSubTypes = async () => {
    const subTypes = await FoodSubType.findAll()
    return subTypes
  }

  public getAllFoods = async () => {
    const foods = await FoodType.findAll({
      include: [
        { model: Food, as: 'foods' }
      ],
      order: [
        ['id', 'ASC']
      ]
    })
    return foods
  }

  public updateMenu = async (id: number) => {
    const food = await Food.findByPk(id)
    if (!food) throw new Error('Food not found')
    food.checked = !food.checked
    await food.save()
    return food
  }
}

export default new FoodService()
