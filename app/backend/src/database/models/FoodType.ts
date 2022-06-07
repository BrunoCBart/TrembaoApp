import { Model, DataTypes } from 'sequelize'
import db from '.'

class FoodType extends Model {
  public id: number
  public name: string
  public image: string
  public foodThemeId: number
}

FoodType.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true
  },
  foodThemeId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  timestamps: false,
  tableName: 'FoodTypes',
  sequelize: db
})

export default FoodType
