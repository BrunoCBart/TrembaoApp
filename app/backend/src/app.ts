import * as express from 'express'
import * as cookieParser from 'cookie-parser'
import * as cors from 'cors'
import { errorHandler } from './middlewares'
import { userRouter, foodsRouter, orderRouter } from './routes'
import './database/models/associations'
import * as http from 'http'
import * as socketIo from 'socket.io'

class App {
  public app: express.Express
  public server: http.Server
  public io: socketIo.Server

  constructor () {
    this.app = express()
    this.server = http.createServer(this.app)
    this.config()
    this.routes()
    this.app.use(errorHandler)
    this.io = require('socket.io')(this.server, {
      cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
        credentials: true
      }
    })
    this.socketEvents()
  }

  private config () {
    this.app.use(express.json())
    this.app.use(cookieParser())
    this.app.use(cors({
      origin: 'http://localhost:3000',
      credentials: true
    }))
    this.app.use(
      express.urlencoded({
        extended: true
      })
    )
  }

  private socket: express.RequestHandler = (req: any, _res, next) => {
    req.io = this.io
    next()
  }

  private routes ():void {
    this.app.use('/users', userRouter)
    this.app.use('/foods', this.socket, foodsRouter)
    this.app.use('/orders', this.socket, orderRouter)
  }

  private socketEvents () {
    this.io.on('connection', (socket) => {
    })
  }

  public start (PORT: number): void {
    this.server.listen(PORT, () => { console.log(`Listening on port ${PORT}`) })
  }
}

export const { app } = new App()

export default new App()
