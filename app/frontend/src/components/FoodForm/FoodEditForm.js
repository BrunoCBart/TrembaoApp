import PropTypes from 'prop-types'
import React from 'react'
import FormButton from '../FormButton'
import FormInput from '../FormInput'
import CloseMark from '../svgs/CloseMark'
import '../../Css/form.css'
import { editFood } from '../../api/trembao'

const inputs = [
  {
    name: 'name',
    label: 'Alimento:',
    placeholder: 'Digite o nome do alimento',
    type: 'text'
  },
  {
    name: 'price',
    label: 'Preço:',
    placeholder: 'Digite o preço do alimento',
    type: 'text'
  },
  {
    name: 'foodType',
    label: 'Tipo:',
    placeholder: 'Digite o tipo do alimento',
    type: 'text'
  },
  {
    name: 'foodSubType',
    label: 'Subtipo:',
    placeholder: 'Digite o subtipo do alimento',
    type: 'text'
  }
]

function FoodEditForm ({ foodToEdit, setFoodToEdit, setEditingFood }) {
  const closeEditForm = () => {
    setEditingFood(false)
  }

  const editFoodOption = async (e) => {
    e.preventDefault()
    const { id, price, name, foodType, foodSubType } = foodToEdit
    await editFood(id, { price: Number(price), name, foodType, foodSubType })
  }
  const handleChange = (e) => {
    const { name, value } = e.target
    setFoodToEdit({ ...foodToEdit, [name]: value })
  }
  return (
    <div className="foodEditForm-1">
      <div className='foodEditForm-1__container'>
      <header className='foodEditForm-1__heading-container'>
        <h2>{foodToEdit.name}</h2>
        <CloseMark className="foodEditForm-1__close-btn foodForm-type__close-btn"
        onClick={closeEditForm}
        fill="white"
        />
      </header>
        {inputs.map((input) => {
          return (
            <FormInput
              key={input.name}
              {...input}
              onChange={handleChange}
              isDashboard={true}
              value={foodToEdit[input.name] || ''}
            />
          )
        })}
        <FormButton className="btn btn-green" onClick={editFoodOption}>
          Editar
        </FormButton>
      </div>
    </div>
  )
}

FoodEditForm.propTypes = {
  setEditingFood: PropTypes.func.isRequired,
  setFoodToEdit: PropTypes.func.isRequired,
  foodToEdit: PropTypes.shape({
    foodSubType: PropTypes.string,
    foodType: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  })
}

export default FoodEditForm
