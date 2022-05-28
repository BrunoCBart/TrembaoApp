import FoodType from '../database/models/FoodType'
import IFoodType from '../interfaces/Food'

class FoodTypeService {
  public getAll = async () => {
    const types: IFoodType[] = await FoodType.findAll()
    return types
  }
}

export default FoodTypeService
