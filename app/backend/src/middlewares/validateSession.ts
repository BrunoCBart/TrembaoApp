import { NextFunction, Request, Response } from 'express'
import JwtUtils from '../utils/jwt'

const validateSession = async (req: Request, res: Response, next: NextFunction) => {
  const { cookies } = req
  try {
    const token = cookies.TBsession
    const isSessionValid = await JwtUtils.validateSession(token)
    if (!isSessionValid) return res.status(401).json({ error: 'Sessão expirada ou inválida' })
    return res.status(200).json({ token })
  } catch (e) {
    next(e)
  }
}

export default validateSession
