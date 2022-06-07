import { Model, DataTypes } from 'sequelize'
import db from '.'

class FoodTheme extends Model {
  public id: number
  public name: string
  public image: string
}

FoodTheme.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  timestamps: false,
  tableName: 'FoodThemes',
  sequelize: db
})

export default FoodTheme
