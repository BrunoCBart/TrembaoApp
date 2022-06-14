export const updateFoodToMenu = (io: any, food: any) => {
  io.emit('foodOption-updated', food)
}

export const updateFood = (io: any, food: any) => {
  io.emit('food-updated', food)
}

export const deleteFoodFromMenu = (io: any, food: any) => {
  io.emit('foodOption-removed', food)
}
