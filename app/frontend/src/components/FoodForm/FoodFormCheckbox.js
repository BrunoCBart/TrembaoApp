import PropTypes from 'prop-types'
import React, { useContext, useState } from 'react'
import FoodEditForm from './FoodEditForm'
import fork from '../../images/svgs/fork.svg'
import pen from '../../images/svgs/pen.svg'
import trash from '../../images/svgs/trash.svg'
import FoodFormButton from './FoodFormButton'
import { deleteFood } from '../../api/trembao'
import trembaoAppContext from '../../context/TrembaoAppContext'

function FoodFormCheckbox ({ name, label, isDashboard, food, foodThemeId, ...checkboxProps }) {
  const [editingFood, setEditingFood] = useState(false)
  const [foodToEdit, setFoodToEdit] = useState(food)
  const id = isDashboard ? `${name}-input-dashboard` : `${name}-input`

  const { getFoodsByTheme } = useContext(trembaoAppContext)

  const onDeleteButtonClick = (e) => {
    e.preventDefault()
    deleteFood(food.id)
      .then(() => getFoodsByTheme(foodThemeId))
  }

  const onEditButtonClick = (e) => {
    e.preventDefault()
    setEditingFood(true)
  }

  const onFoodToolsButtonClick = (e) => {
    e.preventDefault()
    const foodTollsBtn = e.target.classList.contains('food-option-tools-btn') ? e.target : e.target.parentElement
    const previousActive = document.querySelector('.food-option-tools-btn.active')
    if (previousActive && previousActive !== foodTollsBtn) {
      previousActive.classList.remove('active')
    }
    foodTollsBtn.classList.toggle('active')
  }

  const onToolsLostFocus = (e) => {
    e.target.classList.remove('active')
  }

  const foodFormButtons = [
    {
      iconClassName: 'food-option-svg-btn',
      className: 'foodForm-btn food-option-tools-btn',
      src: fork,
      key: 'foodToolsBtn',
      onClick: onFoodToolsButtonClick
    },
    {
      iconClassName: 'food-option-svg-btn food-option-svg-img',
      className: 'foodForm-btn food-option-edit-btn',
      src: pen,
      key: 'foodEditBtn',
      onMouseDown: (e) => e.preventDefault(),
      onClick: onEditButtonClick
    },
    {
      iconClassName: 'food-option-svg-btn food-option-svg-img',
      className: 'foodForm-btn food-option-trash-btn',
      src: trash,
      key: 'foodDeleteBtn',
      onMouseDown: (e) => e.preventDefault(),
      onClick: onDeleteButtonClick
    }
  ]

  const FoodTools = () => {
    return (
      <div className="food-option-tools-btn-container" onBlur={onToolsLostFocus} >
        {foodFormButtons.map((button) => (
        <FoodFormButton
          key={button.key}
          {...button}
        />
        ))}
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

            {...checkboxProps}
            />
            <span>{label}</span>
        </label>
        {isDashboard ? FoodTools() : null}
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
  foodThemeId: PropTypes.number.isRequired,
  isDashboard: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default FoodFormCheckbox
