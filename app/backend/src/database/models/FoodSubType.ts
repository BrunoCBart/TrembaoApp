import { Model, DataTypes } from 'sequelize'
import db from '.'

class FoodSubType extends Model {
  public id: number
  public name: string
}

FoodSubType.init({
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
  tableName: 'FoodSubTypes',
  sequelize: db
})

export default FoodSubType
