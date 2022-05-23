import { RequestHandler } from 'express'
import UserService from '../services/User'
import JwtUtils from '../utils/jwt'

class UserController {
  static getAll: RequestHandler = async (req, res, next) => {
    try {
      const users = await UserService.getAllUsers()
      return res.status(200).json(users)
    } catch (err) {
      next(err)
    }
  }

  static createUser: RequestHandler = async (req, res, next) => {
    try {
      const { username, password, admin } = req.body
      const user = await UserService.createUser({ username, password, admin })
      return res.status(201).json(user)
    } catch (err) {
      next(err)
    }
  }

  static login: RequestHandler = async (req, res, next) => {
    try {
      const { username, password } = req.body

      // if (!username || !password) return res.status(400).json({error: })

      const token = await JwtUtils.authUser(username, password)

      if (!token) return res.status(401).json({ error: 'Não autorizado' })
      return res.cookie('TBsession', token).status(200).json({ token })
    } catch (err) {
      next(err)
    }
  }
}

export default UserController
