import PropTypes from 'prop-types'
import React from 'react'
import {
  formatOrderMessage,
  requestOrder,
  sendOrderToWhatsapp
} from '../../helpers/orderForm'
import FormInput from '../FormInput'
import FormButton from '../FormButton'
import close from '../../images/svgs/close.svg'
import '../../Css/form.css'

const inputs = [
  {
    name: 'name',
    label: 'Nome',
    placeholder: 'Seu nome',
    type: 'text',
    errorMessage: 'Nome precisa ter mais de 2 caracteres',
    pattern: '^[a-zA-Z ]{3,}$',
    required: true
  },
  {
    name: 'phone',
    label: 'Telefone',
    placeholder: 'Seu telefone',
    type: 'text',
    errorMessage: 'Telefone precisa ter 11 digitos',
    pattern: '^[0-9]{11}$',
    required: true
  },
  {
    name: 'district',
    label: 'Bairro',
    placeholder: 'Seu bairro',
    type: 'text',
    errorMessage: 'Bairro precisa ter mais de 2 caracteres',
    pattern: '^[a-zA-Z ]{3,}$',
    required: true
  },
  {
    name: 'street',
    label: 'Rua',
    placeholder: 'Sua rua',
    type: 'text',
    errorMessage: 'Rua precisa ter mais de 2 caracteres',
    pattern: '^[a-zA-Z ]{3,}$',
    required: true
  },
  {
    name: 'number',
    label: 'Número',
    placeholder: 'Seu número',
    type: 'text',
    errorMessage: 'Número precisa ter no máximo 5 digitos',
    pattern: '^[0-9]{1,5}$',
    required: true
  },
  {
    name: 'reference',
    label: 'Referência',
    placeholder: 'Seu número',
    type: 'text',
    required: false
  }
]

function OrderForm ({ orderIngredients, renderOrderForm }) {
  const closeOrderForm = () => {
    renderOrderForm(false)
    // const orderBtn = document.querySelector('.foodOptionsForm__order-btn')
    // document.querySelector('.orderForm').classList.remove('orderForm--active')
    // orderBtn.classList.add('foodOptionsForm__order-btn--hover')
    // orderBtn.disabled = false
    // orderBtn.style.opacity = 1
  }

  const inputIsEmpty = (input) => input.value === ''

  const handleOrder = (e) => {
    e.preventDefault()
    const inputs = Array.from(document.querySelectorAll('.form__input'))
    if (inputs.some(inputIsEmpty)) return alert('Preencha todos os campos')
    const data = new FormData(e.target)
    const userData = Object.fromEntries(data.entries())
    const orderMessage = formatOrderMessage(userData, orderIngredients)
    sendOrderToWhatsapp(orderMessage)
    requestOrder(orderIngredients, userData)
  }

  return (
    <form className="form orderForm" onSubmit={handleOrder}>
      <div className='form__container'>
        <img
          role="button"
          src={close}
          className="form__close-btn orderForm__close-btn"
          onClick={closeOrderForm}
        />
        <h2>Insira seus dados</h2>
        {inputs.map((input) => (
          <FormInput
          key={input.name}
          className='form__input'
          {...input}
          isDashboard={false}
          />
        ))}
        <FormButton className="btn btn-green" aria-label="confirm-order">
          Confirmar
        </FormButton>
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
  }),
  renderOrderForm: PropTypes.func.isRequired
}

export default OrderForm
