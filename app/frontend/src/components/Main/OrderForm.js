import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import ErrorMessage from './ErrorMessage'
import orderErrors from '../../tools/Errors/OrderErrors'
import axios from '../../api/axios'
import {
  getOrderFoodNames,
  getOrderFoods,
  hasErrorMessage,
  noFoodsInType,
  sendOrderToWhatsapp
} from '../../utils/orderForm'
import CloseMark from '../svgs/CloseMark'

const INITIAL_USER_DATA = {
  name: '',
  phone: '',
  district: '',
  street: '',
  number: ''
}

function OrderForm ({ orderIngredients }) {
  const [userData, setUserData] = useState(INITIAL_USER_DATA)
  const [orderMessage, setOrderMessage] = useState('')
  const [errorMessages, setErrorMessages] = useState(INITIAL_USER_DATA)

  const handleUserDataChange = ({ target }) => {
    const { name, value } = target
    setUserData({ ...userData, [name]: value })
  }

  useEffect(() => {
    formatOrderMessage()
    const errors = orderErrors.getErrors(userData)
    setErrorMessages(errors)
  }, [userData])

  const formatOrderMessage = () => {
    const { name, phone, district, street, number } = userData
    // falta inserir o horário do pedido
    const message = ` 
      Nome: ${name}%0a
      Telefone: ${phone}%0a
      Bairro: ${district}%0a
      Rua: ${street}%0a
      Número: ${number}%0a
      ${formatOrderIngredients()}
    `.replace(/\s+/g, ' ')

    setOrderMessage(message)
  }

  const handleOrder = async (e) => {
    e.preventDefault()
    const errorKeys = Object.keys(errorMessages)
    if (hasErrorMessage(errorKeys, errorMessages)) {
      const errors = document.querySelectorAll('.error-msg')
      errors.forEach((error) => error.classList.add('error-msg--show'))
      return
    }
    setUserData(INITIAL_USER_DATA)
    await makeOrder()
    sendOrderToWhatsapp(orderMessage)
  }

  const formatOrderIngredients = () => {
    const ingredientsKeys = Object.keys(orderIngredients)
    const formatedIngredients = ingredientsKeys.reduce((acc, key) => {
      const foods = orderIngredients[key]
      const foodNames = getOrderFoodNames(foods)
      if (noFoodsInType(foodNames)) return acc
      return acc + ` ${key}: ${foodNames.join(', ')}%0a`
    }, '')
    return formatedIngredients
  }

  const showActiveError = ({ target }) => {
    const { name } = target
    const error = document.querySelector(`.error-${name}`)
    error.classList.add('error-msg--show')
  }

  const makeOrder = async () => {
    const foods = getOrderFoods(orderIngredients)
    const { name, district, street, number, phone } = userData
    try {
      await axios.post('/orders', { name, district, street, foods, number, phone })
    } catch (e) {
      console.log(e)
    }
  }

  const closeOrderForm = () => {
    const orderBtn = document.querySelector('.foodOptionsForm__order-btn')
    document.querySelector('.orderForm').classList.remove('orderForm--active')
    orderBtn.classList.add('foodOptionsForm__order-btn--hover')
    orderBtn.disabled = false
    orderBtn.style.opacity = 1
  }

  return (
    <form className="orderForm" onSubmit={handleOrder}>
      <div className='orderForm__container'>
        <CloseMark className="orderFrom__close-btn" onClick={closeOrderForm}/>
        <h2>Insira seus dados</h2>
        <div className='form-group'>
          <label htmlFor='order-name'>
            Nome:
            <input
              name="name"
              type="text"
              id="order-name"
              onChange={handleUserDataChange}
              onFocus={showActiveError}
              value={userData.name}
              />
          </label>
          {errorMessages.name && <ErrorMessage error={errorMessages.name} name="name"/>
          }
        </div>
        <div className='form-group'>
          <label htmlFor='order-phone'>
            Telefone:
            <input
              name="phone"
              type="text"
              id="order-phone"
              onChange={handleUserDataChange}
              onFocus={showActiveError}
              value={userData.phone}
              />
          </label>
          {errorMessages.phone && <ErrorMessage error={errorMessages.phone} name="phone"/>}
        </div>
        <div className='form-group'>
          <label htmlFor='order-district'>
            Bairro:
            <input
              name="district"
              type="text"
              id="order-district"
              onChange={handleUserDataChange}
              onFocus={showActiveError}
              value={userData.district}
              />
          </label>
          {errorMessages.district && <ErrorMessage error={errorMessages.district} name="district"/>}
        </div>
        <div className='form-group'>
          <label htmlFor='order-street'>
            Rua:
            <input
              name="street"
              type="text"
              id="order-street"
              onChange={handleUserDataChange}
              onFocus={showActiveError}
              value={userData.street}
              />
          </label>
          {errorMessages.street && <ErrorMessage error={errorMessages.street} name="street"/>}
        </div>
        <div className='form-group'>
          <label htmlFor='order-number'>
            Número:
            <input
              name="number"
              type="text"
              id="order-number"
              onChange={handleUserDataChange}
              onFocus={showActiveError}
              value={userData.number}
              />
          </label>
          {errorMessages.number && <ErrorMessage error={errorMessages.number} name="number"/>}
        </div>
        <button className="btn btn-green">
          Confirmar
        </button>
      </div>
    </form>
  )
}

OrderForm.propTypes = {
  orderIngredients: PropTypes.shape({
    Arroz: PropTypes.array.isRequired,
    Bebidas: PropTypes.array.isRequired,
    Feijão: PropTypes.array.isRequired,
    Guarnições: PropTypes.array.isRequired,
    Misturas: PropTypes.array.isRequired,
    Saladas: PropTypes.array.isRequired
  })
}

export default OrderForm
