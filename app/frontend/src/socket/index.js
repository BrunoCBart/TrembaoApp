import socketIoClient from 'socket.io-client'

const END_POINT = 'http://localhost:4000'
const socket = socketIoClient(END_POINT)

export default socket
