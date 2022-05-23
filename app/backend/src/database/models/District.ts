import { Model, DataTypes } from 'sequelize'
import db from '.'

class District extends Model {
  public id: number
  public name: string
}

District.init({
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
  tableName: 'Districts',
  sequelize: db
})

export default District
