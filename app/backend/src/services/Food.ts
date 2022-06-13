import Food from '../database/models/Food'
import FoodSubType from '../database/models/FoodSubType'
import FoodTheme from '../database/models/FoodTheme'
import FoodType from '../database/models/FoodType'
import IFood, { IFoodUpdate } from '../interfaces/Food'

interface ServiceError {
  error: string
  code: number
}
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

  public getAllByTheme = async (foodThemeId: number): Promise<FoodType[] | ServiceError > => {
    const foods: FoodType[] = await FoodType.findAll({
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
    if (foods.length === 0) return { code: 404, error: 'No themes or types found' }
    return foods.map(this.getAllByThemeMap)
  }

  public getAllThemes = async (): Promise<FoodTheme[]> => {
    const themes: FoodTheme[] = await FoodTheme.findAll()
    return themes
  }

  public create = async (food: IFoodUpdate) => {
    const { name, price, foodType, foodSubType } = food

    const foodExists: Food | null = await Food.findOne({ where: { name } })
    if (foodExists) return { code: 409, error: 'Food already exists' }

    const { foodTypeId, foodSubTypeId } = await this.doesfoodTypesExist(foodType, foodSubType)

    const newFood: Food = await Food.create({ name, price, foodTypeId, foodSubTypeId })
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

  public getFoodById = async (foodId: number): Promise<IFood | ServiceError> => {
    const food: Food | null = await Food.findOne({ where: { id: foodId } })
    if (!food) return { code: 404, error: 'Food not found' }
    return food
  }

  public update = async (id: number, fields: IFoodUpdate): Promise<IFood | ServiceError> => {
    const { name, price, foodType, foodSubType } = fields
    const { foodTypeId, foodSubTypeId, error, code } = await this.doesfoodTypesExist(foodType, foodSubType)
    if (error) return { code, error }
    const formatedFields = { name, price, foodTypeId, foodSubTypeId }
    const food: Food | null = await Food.findOne({ where: { id } })
    if (!food) return { code: 404, error: 'Food not found' }
    food.update(formatedFields)
    return food
  }

  public delete = async (id: number): Promise<IFood | ServiceError> => {
    const food: Food | null = await Food.findOne({ where: { id } })
    if (!food) return { code: 404, error: 'Food not found' }
    food.destroy()
    return food
  }

  public updateMenu = async (id: number): Promise<IFood | ServiceError> => {
    const food: Food | null = await Food.findByPk(id)
    if (!food) return { code: 404, error: 'Food not found' }
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
      return { code: 404, error: 'Food type not found' }
    }

    const foodSubTypeExists = await FoodSubType.findOne({ where: { name: foodSubType || null } })

    if (foodSubTypeExists) {
      foodSubTypeId = foodSubTypeExists.id
    } else if (foodSubType) {
      return { code: 404, error: 'Food sub type not found' }
    }

    return { foodTypeId, foodSubTypeId }
  }
}

export default FoodService
