import Food from '../database/models/Food'
import FoodSubType from '../database/models/FoodSubType'
import FoodType from '../database/models/FoodType'
import { IFoodUpdate } from '../interfaces/Food'
class FoodService {
  private foodTypesReduce = (foods: any) => {
    return foods.reduce((acc: any, food: any) => {
      if (!acc.find((f: any) => f.foodType === food.foodType)) {
        acc.push({
          foodType: food.foodType,
          foods: []
        })
      }
      acc.find((f: any) => f.foodType === food.foodType).foods.push(food)
      return acc
    }, [])
  }

  public getAll = async () => {
    const foods = await this.getAllFoods()
    return this.foodTypesReduce(foods)
  }

  public getAllChecked = async () => {
    const foods = await this.getAllFoods()
    const checkedFoods = foods.filter((food: any) => food.checked)
    return this.foodTypesReduce(checkedFoods)
  }

  public create = async (food: IFoodUpdate) => {
    const { name, price, foodType, foodSubType } = food

    const foodExists = await Food.findOne({ where: { name } })
    if (foodExists) throw new Error('409|Food already exists')

    const { foodTypeId, foodSubTypeId } = await this.doesfoodTypesExist(foodType, foodSubType)

    const newFood = await Food.create({ name, price, foodTypeId, foodSubTypeId })
    return newFood
  }

  private allFoodsMap = (food: any) => ({
    id: food.id,
    name: food.name,
    price: food.price,
    checked: food.checked,
    foodType: food['foodType.name'],
    foodTypeId: food['foodType.id'],
    foodSubType: food['foodSubType.name'],
    foodSubTypeId: food['foodSubType.id']
  })

  public getAllFoods = async () => {
    const foods: Food[] = await Food.findAll(
      {
        raw: true,
        include: [
          { model: FoodType, as: 'foodType' },
          { model: FoodSubType, as: 'foodSubType' }
        ]
      })

    return foods.map(this.allFoodsMap)
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
