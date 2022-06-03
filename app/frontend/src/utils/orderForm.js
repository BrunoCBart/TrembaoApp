import { makeOrder } from '../api/trembao'

export const sendOrderToWhatsapp = (orderMessage) => {
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

export const hasErrorMessage = (errorKeys, errorMessages) => errorKeys.some((key) => errorMessages[key])

export const getOrderFoodNames = (foods) => foods
  .filter(({ checked }) => checked)
  .map(({ foodName }) => foodName)

export const formatOrderMessage = (userData, orderIngredients) => {
  const { name, phone, district, street, number } = userData
  // falta inserir o horário do pedido
  const message = `
    Nome: ${name}%0a
    Telefone: ${phone}%0a
    Bairro: ${district}%0a
    Rua: ${street}%0a
    Número: ${number}%0a
    ${userData.reference ? `Referência: ${userData.reference}%0a` : ''}
    ${formatOrderIngredients(orderIngredients)}
  `.replace(/\s+/g, ' ')

  return message
}

const noFoodsInType = (foodNames) => !foodNames.length
const formatOrderIngredients = (orderIngredients) => {
  const ingredientsKeys = Object.keys(orderIngredients)
  const formatedIngredients = ingredientsKeys.reduce((acc, key) => {
    const foods = orderIngredients[key]
    const foodNames = getOrderFoodNames(foods)
    if (noFoodsInType(foodNames)) return acc
    return acc + ` ${key}: ${foodNames.join(', ')}%0a`
  }, '')
  return formatedIngredients
}

export const getOrderFoods = (orderIngredients) => {
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

export const requestOrder = async (orderIngredients, userData) => {
  const foods = getOrderFoods(orderIngredients)
  try {
    await makeOrder({ ...userData, foods })
  } catch (e) {
    console.log(e)
  }
}
