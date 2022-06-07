import Food from '../database/models/Food'
import FoodSubType from '../database/models/FoodSubType'
import FoodTheme from '../database/models/FoodTheme'
import FoodType from '../database/models/FoodType'
import { IFoodUpdate } from '../interfaces/Food'
class FoodService {
  private getAllByThemeMap = ({ dataValues: foodTypes }: any) => {
    return {
      ...foodTypes,
      foodTheme: foodTypes.foodTheme.name,
      foods: foodTypes.foods.map((food: any) => {
        return {
          id: food.id,
          name: food.name,
          price: food.price,
          foodType: food.foodType.name,
          foodTypeId: food.foodTypeId,
          foodSubType: food.foodSubType === null ? null : food.foodSubType.name,
          foodSubTypeId: food.foodSubTypeId,
          onMenu: food.onMenu
        }
      })
    }
  }

  public getAllByTheme = async (foodThemeId: number) => {
    const foods = await FoodType.findAll({
      where: { foodThemeId },
      include: [
        { model: FoodTheme, as: 'foodTheme' },
        {

          model: Food,
          as: 'foods',
          include: [
            { model: FoodSubType, as: 'foodSubType' },
            { model: FoodType, as: 'foodType' }
          ]
        }
      ]
    })
    return foods.map(this.getAllByThemeMap)
  }

  public getAllThemes = async () => {
    const themes = await FoodTheme.findAll()
    return themes
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

  public getFoodById = async (foodId: number) => {
    const food: Food | null = await Food.findOne({ where: { id: foodId } })
    return food
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
    food.onMenu = !food.onMenu
    await food.save()
    return food
  }

  private doesfoodTypesExist = async (foodType: string, foodSubType: string) => {
    let foodTypeId: number | undefined
    let foodSubTypeId: number | undefined

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
