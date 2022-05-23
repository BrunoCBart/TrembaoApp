import { Model, DataTypes } from 'sequelize'
import db from '.'

class Order extends Model {
  public id: number
  public foodNames: number[]
}

Order.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  districtId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  streetId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  foods: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
    allowNull: false
  },
  number: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  timestamps: false,
  tableName: 'Orders',
  sequelize: db
})

export default Order
