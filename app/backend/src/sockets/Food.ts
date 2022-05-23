const addFoodToMenu = (io: any, food: any) => {
  io.emit('foodOption-updated', food)
}

export default addFoodToMenu
