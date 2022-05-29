import Food from '../database/models/Food'
import FoodSubType from '../database/models/FoodSubType'
import FoodType from '../database/models/FoodType'
import { IFoodUpdate } from '../interfaces/Food'
class FoodService {
  public getAll = async () => {
    const foods: FoodType[] = await FoodType.findAll({
      include: [
        {
          model: Food,
          as: 'foods',
          attributes: ['id', 'name', 'foodSubTypeId', 'checked', 'price']
        }
      ],
      order: [
        ['id', 'ASC']
      ]
    })

    return foods
  }

  public getAllChecked = async () => {
    const foods: FoodType[] = await FoodType.findAll({
      include: [
        {
          model: Food,
          as: 'foods',
          where: { checked: true },
          attributes: ['id', 'name', 'checked', 'price']
        }
      ],
      order: [
        ['id', 'ASC']
      ]
    })
    return foods
  }

  public create = async (food: IFoodUpdate) => {
    const { name, price, foodType, foodSubType } = food

    const foodExists = await Food.findOne({ where: { name } })
    if (foodExists) throw new Error('409|Food already exists')

    const { foodTypeId, foodSubTypeId } = await this.doesfoodTypesExist(foodType, foodSubType)

    const newFood = await Food.create({ name, price, foodTypeId, foodSubTypeId })
    return newFood
  }

  public getAllFoods = async () => {
    const foods: Food[] = await Food.findAll()
    return foods
  }

  public update = async (id: number, fields: IFoodUpdate) => {
    const { name, price, foodType, foodSubType } = fields
    const { foodTypeId, foodSubTypeId } = await this.doesfoodTypesExist(foodType, foodSubType)
    const formatedFields = { name, price, foodTypeId, foodSubTypeId }
    const updatedFood = await Food.update(formatedFields, { where: { id } })
    return updatedFood
  }

  public delete = async (id: number) => {
    const deletedFood = await Food.destroy({ where: { id } })
    return deletedFood
  }

  public updateMenu = async (id: number) => {
    const food: Food | null = await Food.findByPk(id)
    if (!food) throw new Error('404|Food not found')
    food.checked = !food.checked
    await food.save()
    return food
  }

  private doesfoodTypesExist = async (foodType: string, foodSubType: string) => {
    let foodTypeId: number | undefined, foodSubTypeId: number | undefined

    const foodTypeExists = await FoodType.findOne({ where: { name: foodType || null } })

    if (foodTypeExists) {
      foodTypeId = foodTypeExists.id
    } else if (foodType) {
      throw new Error('404|Food type not found')
    }

    const foodSubTypeExists = await FoodSubType.findOne({ where: { name: foodSubType || null } })

    if (foodSubTypeExists) {
      foodSubTypeId = foodSubTypeExists.id
    } else if (foodSubType) {
      throw new Error('404|Food sub type not found')
    }

    return { foodTypeId, foodSubTypeId }
  }
}

export default FoodService
