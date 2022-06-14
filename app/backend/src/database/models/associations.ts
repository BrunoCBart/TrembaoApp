import Food from './Food'
import FoodTheme from './FoodTheme'
import FoodType from './FoodType'

FoodType.hasMany(Food, { foreignKey: 'foodTypeId', as: 'foods' })
FoodType.belongsTo(FoodTheme, { foreignKey: 'foodThemeId', as: 'foodTheme' })
Food.belongsTo(FoodType, { foreignKey: 'foodTypeId', as: 'foodType' })
