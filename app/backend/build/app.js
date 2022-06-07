"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const middlewares_1 = require("./middlewares");
const routes_1 = require("./routes");
require("./database/models/associations");
const http = require("http");
class App {
    constructor() {
        this.socket = (req, _res, next) => {
            req.io = this.io;
            next();
        };
        this.app = express();
        this.server = http.createServer(this.app);
        this.config();
        this.routes();
        this.app.use(express.static('public'));
        this.app.use(middlewares_1.errorHandler);
        this.io = require('socket.io')(this.server, {
            cors: {
                origin: 'http://localhost:3000',
                methods: ['GET', 'POST'],
                credentials: true
            }
        });
        this.socketEvents();
    }
    config() {
        this.app.use(express.json());
        this.app.use(cookieParser());
        this.app.use(cors({
            origin: 'http://localhost:3000',
            credentials: true
        }));
        this.app.use(express.urlencoded({
            extended: true
        }));
    }
    routes() {
        this.app.use('/users', routes_1.userRouter);
        this.app.use('/foods', this.socket, routes_1.foodsRouter);
        this.app.use('/orders', this.socket, routes_1.orderRouter);
    }
    socketEvents() {
        this.io.on('connection', (socket) => {
        });
    }
    start(PORT) {
        this.server.listen(PORT, () => { console.log(`Listening on port ${PORT}`); });
    }
}
exports.app = new App().app;
exports.default = new App();
//# sourceMappingURL=app.js.map