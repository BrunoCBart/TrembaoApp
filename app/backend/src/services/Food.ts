import Food from '../database/models/Food'
// import FoodSubType from '../database/models/FoodSubType'
import FoodType from '../database/models/FoodType'

class FoodService {
  public getAll = async () => {
    const foods = await FoodType.findAll({
      include: [
        {
          model: Food,
          as: 'foods',
          attributes: ['id', 'name', 'foodSubTypeId', 'checked']
        }
      ],
      order: [
        ['id', 'ASC']
      ]
    })

    return foods
  }

  public getAllChecked = async () => {
    const foods = await FoodType.findAll({
      include: [
        {
          model: Food,
          as: 'foods',
          where: { checked: true },
          attributes: ['id', 'name', 'checked']
        }
      ],
      order: [
        ['id', 'ASC']
      ]
    })
    return foods
  }

  public updateMenu = async (id: number) => {
    const food = await Food.findByPk(id)
    if (!food) return { error: 'Food not found', code: 404 }
    food.checked = !food.checked
    await food.save()
    return { food }
  }
}

export default FoodService
