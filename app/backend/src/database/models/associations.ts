import Food from './Food'
import FoodSubType from './FoodSubType'
import FoodType from './FoodType'

Food.belongsTo(FoodType, { foreignKey: 'foodTypeId', as: 'foodType' })
Food.belongsTo(FoodSubType, { foreignKey: 'foodSubTypeId', as: 'foodSubType' })
FoodType.hasMany(Food, { foreignKey: 'foodTypeId', as: 'foods' })
