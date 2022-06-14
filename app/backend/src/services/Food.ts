import Food from '../database/models/Food'
import FoodTheme from '../database/models/FoodTheme'
import FoodType from '../database/models/FoodType'
import IFood, { IFoodCreate, IFoodUpdate } from '../interfaces/Food'

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

  public create = async (food: IFoodCreate) => {
    const { name, price, foodType } = food

    const foodExists: Food | null = await Food.findOne({ where: { name } })
    if (foodExists) return { code: 409, error: 'Food already exists' }

    const foodTypeId = await this.doesfoodTypesExist(foodType)

    const newFood: Food = await Food.create({ name, price, foodTypeId })
    return newFood
  }

  private allFoodsMap = (food: any) => ({
    id: food.id,
    name: food.name,
    price: food.price,
    checked: food.checked,
    foodType: food['foodType.name'],
    foodTypeId: food['foodType.id']
  })

  public getAllFoods = async () => {
    const foods: Food[] = await Food.findAll(
      {
        raw: true,
        include: [
          { model: FoodType, as: 'foodType' }
        ]
      })

    return foods.map(this.allFoodsMap)
  }

  public getFoodById = async (foodId: number): Promise<IFood | ServiceError> => {
    const food: Food | null = await Food.findOne({ where: { id: foodId } })
    if (!food) return { code: 404, error: 'Food not found' }
    return food
  }

  private formatUpdatedFood = ({ dataValues: food }: any) => ({
    ...food,
    foodType: food.foodType.name
  })

  public update = async (id: number, fields: IFoodUpdate): Promise<IFood | ServiceError> => {
    const { name, price } = fields
    const food: Food | null = await Food.findOne({
      where: { id },
      include: [
        { model: FoodType, as: 'foodType' }
      ]
    })
    if (!food) return { code: 404, error: 'Food not found' }
    food.update({ name, price })
    const updatedFood = this.formatUpdatedFood(food)
    return updatedFood
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

  private doesfoodTypesExist = async (foodType: string) => {
    const foodTypeExists = await FoodType.findOne({ where: { name: foodType || null } })
    if (!foodTypeExists) return { code: 404, error: 'Food type not found' }
    return foodTypeExists.id
  }
}

export default FoodService
