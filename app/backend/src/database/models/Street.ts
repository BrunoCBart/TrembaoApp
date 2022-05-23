import { Model, DataTypes } from 'sequelize'
import db from '.'

class Street extends Model {
  public id: number
  public name: string
}

Street.init({
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
  districtId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  timestamps: false,
  tableName: 'Streets',
  sequelize: db
})
export default Street
