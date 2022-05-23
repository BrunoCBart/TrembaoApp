const createOrder = (io: any, order: any) => {
  io.emit('order-created', order)
}

export default createOrder
