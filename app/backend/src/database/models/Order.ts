import { Model, DataTypes } from 'sequelize'
import db from '.'

class Order extends Model {
  public id: number
  public phone: string
  public districtId: number
  public streetId: number
  public foods: number[]
  public number: number
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
  },
  reference: {
    type: DataTypes.STRING,
    allowNull: true
  },
  createdAt: {
    type: DataTypes.DATE
  },
  updatedAt: {
    type: DataTypes.DATE
  }
}, {
  timestamps: false,
  tableName: 'Orders',
  sequelize: db
})

export default Order
