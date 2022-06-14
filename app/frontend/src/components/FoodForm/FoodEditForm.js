import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import FormButton from '../FormButton'
import FormInput from '../FormInput'
import '../../Css/form.css'
import { editFood } from '../../api/trembao'
import close from '../../images/svgs/close.svg'
import trembaoAppContext from '../../context/TrembaoAppContext'

const inputs = [
  {
    name: 'name',
    label: 'Alimento:',
    placeholder: 'Digite o nome do alimento',
    type: 'text',
    pattern: '^[a-zA-Z]{3,}$',
    required: true,
    errorMessage: 'Nome precisa ter mais de 2 caracteres'
  },
  {
    name: 'price',
    label: 'Preço:',
    placeholder: 'Digite o preço do alimento',
    type: 'text',
    pattern: '^[0-9]{1,3}$',
    required: true,
    errorMessage: 'Preço precisa ter no máximo 3 digitos'
  }

]

function FoodEditForm ({ foodToEdit }) {
  const { setFoodToEdit } = useContext(trembaoAppContext)
  const closeEditForm = () => {
    setFoodToEdit(null)
  }

  const editFoodOption = async (e) => {
    e.preventDefault()
    const { id, price, name } = foodToEdit
    const food = await editFood(id, { price: Number(price), name })
    console.log(food)
    if ('error' in food) return
    setFoodToEdit(null)
  }
  const handleChange = (e) => {
    const { name, value } = e.target
    setFoodToEdit({ ...foodToEdit, [name]: value })
  }
  return (
    <form className="foodEditForm form">
      <div className='foodEditForm__container'>
      <header className='foodEditForm__heading-container'>
        <h2>{foodToEdit.name}</h2>
        <img
          role="button"
          src={close}
          alt="Create Food button"
          className="foodEditForm__close-btn foodForm-type__close-btn .form__close-btn"
          onClick={closeEditForm}
        />
      </header>
        {inputs.map((input) => {
          return (
            <FormInput
              key={input.name}
              {...input}
              onChange={handleChange}
              isDashboard={true}
              value={foodToEdit[input.name]}
            />
          )
        })}
        <FormButton className="btn btn-green" onClick={editFoodOption}>
          Editar
        </FormButton>
      </div>
    </form>
  )
}

FoodEditForm.propTypes = {
  foodToEdit: PropTypes.shape({
    foodType: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  })
}

export default FoodEditForm
