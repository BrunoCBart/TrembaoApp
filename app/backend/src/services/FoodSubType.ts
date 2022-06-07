import FoodSubType from '../database/models/FoodSubType'

class FoodSubTypeService {
  public getAll = async () => {
    const subTypes = await FoodSubType.findAll()
    return subTypes
  }
}

export default FoodSubTypeService
