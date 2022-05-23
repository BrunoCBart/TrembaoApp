const sendOrderToWhatsapp = (orderMessage) => {
  const link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a')
  link.href = `http://wa.me/5512996049478?text=${orderMessage}`
  link.target = '_blank'
  const event = new MouseEvent('click', {
    view: window,
    bubbles: false,
    cancelable: true
  })
  link.dispatchEvent(event)
}

const hasErrorMessage = (errorKeys, errorMessages) => errorKeys.some((key) => errorMessages[key])

const noFoodsInType = (foodNames) => !foodNames.length

const getOrderFoodNames = (foods) => foods
  .filter(({ checked }) => checked)
  .map(({ foodName }) => foodName)

const getOrderFoods = (orderIngredients) => {
  return Object.keys(orderIngredients).reduce((acc, type) => {
    const foods = orderIngredients[type]
    foods.forEach(({ foodName, checked }) => {
      if (checked) {
        acc.push(foodName)
      }
    })
    return acc
  }, []).sort()
}
export {
  sendOrderToWhatsapp,
  hasErrorMessage,
  noFoodsInType,
  getOrderFoodNames,
  getOrderFoods
}
