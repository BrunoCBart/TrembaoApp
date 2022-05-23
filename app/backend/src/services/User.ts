import User from '../database/models/User'
import { IUser, UserBody } from '../interfaces/User'
class UserService {
  public getAllUsers = async () => {
    const users = await User.findAll()
    return users
  }

  public createUser = async ({ username, password, admin }: UserBody) => {
    const isUserInDb = await User.findOne({ where: { username } })
    if (isUserInDb) throw (new Error('User already exists'))
    const user = await User.create({ username, password, admin })
    return user
  }

  public findUser = async (userCredentials: any) => {
    const user: IUser | null = await User.findOne({ where: userCredentials })
    return user
  }
}

export default new UserService()
