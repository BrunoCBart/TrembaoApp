import PropTypes from 'prop-types'
import React from 'react'
// import ErrorMessage from './ErrorMessage'
// import orderErrors from '../../tools/Errors/OrderErrors'
import {
  formatOrderMessage,
  requestOrder,
  sendOrderToWhatsapp
} from '../../utils/orderForm'
import CloseMark from '../svgs/CloseMark'
import FormInput from '../FormInput'

const inputs = [
  {
    name: 'name',
    label: 'Nome',
    placeholder: 'Seu nome',
    type: 'text',
    errorMessage: 'Nome precisa ter mais de 2 caracteres',
    required: true
  },
  {
    name: 'phone',
    label: 'Telefone',
    placeholder: 'Seu telefone',
    type: 'text',
    errorMessage: 'Telefone precisa ter 11 digitos',
    required: true
  },
  {
    name: 'district',
    label: 'Bairro',
    placeholder: 'Seu bairro',
    type: 'text',
    errorMessage: 'Bairro precisa ser preenchido',
    required: true
  },
  {
    name: 'street',
    label: 'Rua',
    placeholder: 'Sua rua',
    type: 'text',
    errorMessage: 'Rua precisa ser preenchida',
    required: true
  },
  {
    name: 'number',
    label: 'Número',
    placeholder: 'Seu número',
    type: 'text',
    errorMessage: 'Número precisa ser preenchido',
    required: true
  },
  {
    name: 'reference',
    label: 'Referência',
    placeholder: 'Seu número',
    type: 'text',
    errorMessage: 'Referência precisa ser preenchida',
    required: false
  }
]

function OrderForm ({ orderIngredients }) {
  const closeOrderForm = () => {
    const orderBtn = document.querySelector('.foodOptionsForm__order-btn')
    document.querySelector('.orderForm').classList.remove('orderForm--active')
    orderBtn.classList.add('foodOptionsForm__order-btn--hover')
    orderBtn.disabled = false
    orderBtn.style.opacity = 1
  }

  const handleOrder = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const userData = Object.fromEntries(data.entries())
    const orderMessage = formatOrderMessage(userData, orderIngredients)
    sendOrderToWhatsapp(orderMessage)
    requestOrder(orderIngredients)
  }

  return (
    <form className="orderForm" onSubmit={handleOrder}>
      <div className='orderForm__container'>
        <CloseMark className="orderFrom__close-btn" onClick={closeOrderForm}/>
        <h2>Insira seus dados</h2>
        {inputs.map(({ name, label, placeholder, type, errorMessage, required }) => (
          <FormInput
            key={name}
            name={name}
            label={label}
            placeholder={placeholder}
            type={type}
            errorMessage={errorMessage}
            required={required}
          />
        ))}

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
