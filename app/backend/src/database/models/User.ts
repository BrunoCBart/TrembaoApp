import { Model, DataTypes } from 'sequelize'
import db from '.'
import BcryptUtils from '../../utils/bcrypt'

class User extends Model {
  public id: number
  public username: string
  public password: string
  public admin: boolean
  public createdAt: Date
  public updatedAt: Date
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  admin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE
  },
  updatedAt: {
    type: DataTypes.DATE
  }
}, {
  tableName: 'Users',
  sequelize: db
})

User.addHook('beforeCreate', async (user: any) => {
  user.password = await BcryptUtils.hash(user.password)
})

export default User
