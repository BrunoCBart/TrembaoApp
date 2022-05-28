import FoodSubType from '../database/models/FoodSubType'
import IFoodType from '../interfaces/Food'

class FoodSubTypeService {
  public getAll = async () => {
    const subTypes: IFoodType[] = await FoodSubType.findAll()
    return subTypes
  }
}

export default FoodSubTypeService
