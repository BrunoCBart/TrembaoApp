import { Model, DataTypes } from 'sequelize'
import db from '.'

class FoodType extends Model {
  public id: number
  public name: string
}

FoodType.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}, {
  timestamps: false,
  tableName: 'FoodTypes',
  sequelize: db
})

export default FoodType
