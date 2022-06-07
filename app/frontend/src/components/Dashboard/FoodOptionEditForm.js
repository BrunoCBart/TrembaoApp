import React, { useContext } from 'react'
import FormButton from '../FormButton'
import FormInput from '../FormInput'
import CloseMark from '../svgs/CloseMark'
import '../../Css/form.css'
import trembaoAppContext from '../../Context/TrembaoAppContext'
import { editFood } from '../../api/trembao'

const inputs = [
  {
    name: 'name',
    label: 'Comida:',
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

function FoodOptionEditForm () {
  const { foodToEdit, setFoodToEdit } = useContext(trembaoAppContext)
  const closeEditForm = () => {
    document.querySelector('.foodEditForm').classList.remove('foodEditForm--active')
    setFoodToEdit({})
  }

  const editFoodOption = async (e) => {
    e.preventDefault()
    const { id, price, name, foodType, foodSubType } = foodToEdit
    await editFood(id, { price: Number(price), name, foodType, foodSubType })
  }
  console.log('a')
  const handleChange = (e) => {
    const { name, value } = e.target
    setFoodToEdit({ ...foodToEdit, [name]: value })
  }
  return (
    <form className="form foodEditForm">
      {'name' in foodToEdit && (
      <div className='form__container foodEditForm__container'>
      <CloseMark className="form__close-btn foodEditForm__close-btn" onClick={closeEditForm}/>
      <h2>{foodToEdit.name}</h2>
        {inputs.map((input) => {
          return (
            <FormInput
              key={input.name}
              {...input}
              onChange={handleChange}
              isDashBoard={true}
              value={foodToEdit[input.name]}
            />
          )
        })}
        <FormButton className="btn btn-green" onClick={editFoodOption}>
          Editar
        </FormButton>
      </div>
      )}

    </form>
  )
}

export default FoodOptionEditForm
