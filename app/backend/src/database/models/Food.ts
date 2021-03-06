import { Model, DataTypes } from 'sequelize'
import db from '.'

class Food extends Model {
  public id: number
  public name: string
  public price: number
  public foodTypeId: number
  public foodSubTypeId: number
  public onMenu: boolean
}

Food.init({
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
  foodTypeId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  onMenu: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  timestamps: false,
  tableName: 'Foods',
  sequelize: db
})

export default Food
