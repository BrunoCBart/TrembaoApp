import * as express from 'express'
import UserController from '../controllers/User'
import { validateSession } from '../middlewares'
import validateBody from '../middlewares/validateBody'
import { loginSchema, userSchema } from '../schemas/index'

class UserRouter {
  public router = express.Router()

  constructor () {
    this.routes()
  }

  routes (): void {
    this.router.get('/', UserController.getAll)
    this.router.post('/', validateBody(userSchema), UserController.createUser)
    this.router.post('/login', validateBody(loginSchema), UserController.login)
    this.router.get('/login', validateSession)
  }
}

export default new UserRouter().router
