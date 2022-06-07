import FoodType from '../database/models/FoodType'
import IFoodType from '../interfaces/Food'

class FoodTypeService {
  public getAll = async () => {
    const types: IFoodType[] = await FoodType.findAll()
    return types
  }

  public getTypesByTheme = async (foodThemeId: number) => {
    const types: IFoodType[] = await FoodType.findAll({
      where: { foodThemeId }
    })
    return types
  }
}

export default FoodTypeService
