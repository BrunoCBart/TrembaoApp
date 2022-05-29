import { NextFunction, Request, Response } from 'express'

const errorHandler = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  const [code, error] = err.message.split('|')
  if (code && error) return res.status(Number(code)).json({ error })
  return res.status(500).json({ error: `Error ${err.message}` })
}
export default errorHandler
