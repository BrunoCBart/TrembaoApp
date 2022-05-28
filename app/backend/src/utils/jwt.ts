import * as dotenv from 'dotenv'
import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import UserService from '../services/User'
import { UserPayload } from '../interfaces/User'

const userService = new UserService()
dotenv.config()

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256'
}

const secret = process.env.JWT_SECRET || 'secret'

class JwtUtils {
  static createToken = (payload: UserPayload) => {
    const token = jwt.sign(payload, secret, jwtConfig as jwt.SignOptions)
    return token
  }

  static authUser = async (username: string, password: string) => {
    const user = await userService.findOne({ username })
    if (!user) return false
    const pwIsValid = await bcrypt.compare(password, user.password)
    if (!pwIsValid) return false
    const { password: pw, ...payload } = user
    const token = JwtUtils.createToken(payload)
    return token
  }

  static validateSession = async (token: string) => {
    const payload = JwtUtils.verifyToken(token)
    if (!payload) return false
    const user = await userService.findOne(
      { username: payload.dataValues.username })
    if (!user) return false
    return true
  }

  static verifyToken = (token: string) => {
    try {
      const decoded = jwt.decode(token, secret as jwt.DecodeOptions)
      if (!decoded || typeof decoded === 'string') throw new Error('Invalid token')
      return decoded as jwt.JwtPayload
    } catch (error) {
      return null
    }
  }
}

export default JwtUtils
