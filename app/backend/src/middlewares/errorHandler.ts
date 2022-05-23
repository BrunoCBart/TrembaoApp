import { NextFunction, Request, Response } from 'express'

const errorHandler = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  return res.status(500).json({ error: `Error ${err.message}` })
}
export default errorHandler
