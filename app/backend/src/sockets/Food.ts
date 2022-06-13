export const updateFoodToMenu = (io: any, food: any) => {
  io.emit('foodOption-updated', food)
}

export const deleteFoodFromMenu = (io: any, food: any) => {
  io.emit('foodOption-removed', food)
}
