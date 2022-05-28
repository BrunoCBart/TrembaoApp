import * as express from 'express'
import UserController from '../controllers/User'
import { validateSession } from '../middlewares'
import validateBody from '../middlewares/validateBody'
import { loginSchema, userSchema } from '../schemas/index'

class UserRouter {
  public router = express.Router()

  constructor (protected userController = new UserController()) {
    this.routes()
  }

  routes (): void {
    this.router.get('/', this.userController.getAll)
    this.router.post('/', validateBody(userSchema), this.userController.create)
    this.router.post('/login', validateBody(loginSchema), this.userController.login)
    this.router.get('/login', validateSession)
  }
}

export default new UserRouter().router
