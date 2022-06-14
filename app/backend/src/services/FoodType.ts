import FoodType from '../database/models/FoodType'

class FoodTypeService {
  public getAll = async () => {
    const types = await FoodType.findAll()
    return types
  }

  public getTypesByTheme = async (foodThemeId: number) => {
    const types = await FoodType.findAll({
      where: { foodThemeId }
    })
    return types
  }
}

export default FoodTypeService
