import PropTypes from 'prop-types'
import React, { useState } from 'react'
import FormButton from '../FormButton'
import Pen from '../svgs/Pen'
import FoodEditForm from './FoodEditForm'

function FoodFormCheckbox ({ name, label, isDashboard, food, ...inputProps }) {
  const [editingFood, setEditingFood] = useState(false)
  const [foodToEdit, setFoodToEdit] = useState(food)
  const id = isDashboard ? `${name}-input-dashboard` : `${name}-input`

  const EditBtn = () => {
    const onEditButtonClick = (e) => {
      e.preventDefault()
      setEditingFood(true)
    }

    return (
      <div className="foodForm-editBtn-container">
        <FormButton className="food-option-svg-btn" onClick={(e) => onEditButtonClick(e)}>
          <Pen width="100%" />
        </FormButton>
      </div>
    )
  }

  return (
    <>
      <div className="foodForm-group">
        <label htmlFor={id}>
          <input
            type="checkbox"
            name={name}
            id={id}

            {...inputProps}
            />
            <span>{label}</span>
        </label>
        {isDashboard ? EditBtn() : null}
      </div>
      {editingFood && (
        <FoodEditForm
        foodToEdit={foodToEdit}
        setEditingFood={setEditingFood}
        setFoodToEdit={setFoodToEdit}
        />
      )}
    </>
  )
}

FoodFormCheckbox.propTypes = {
  food: PropTypes.shape({
    foodSubType: PropTypes.string,
    foodType: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }),
  isDashboard: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default FoodFormCheckbox
