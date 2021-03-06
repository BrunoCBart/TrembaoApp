import PropTypes from 'prop-types'
import React from 'react'
import FoodFormCheckbox from './FoodFormCheckbox'
import close from '../../images/svgs/close.svg'

function FoodFormOptions ({ foods, type, image, isDashboard, isChecked, foodThemeId, onCheck }) {
  const closeFoodType = () => {
    document.querySelector(`.foodForm__type-${type}`).classList.remove('active')
  }

  return (
    <div className={`foodForm-type__foods-container foodForm__type-${type}`}>
      <div className="foodForm-type__content-container">
        <img className="foodForm-type__image" src={image} alt="smt"/>
        <header className="foodForm-type__header">
          <h2 className="foodForm-type__title">{type}</h2>
          <img
            role="button"
            src={close}
            className="foodForm-type__close-btn"
            onClick={closeFoodType}
          />
        </header>
            <div className="foodForm-type__foods">
              {foods
                .filter(({ onMenu }) => {
                  if (isDashboard) return true
                  return onMenu
                })
                .map((food) => {
                  return (
                <FoodFormCheckbox
                  onChange={() => onCheck(food.id, type)}
                  checked={isDashboard ? food.onMenu : isChecked(food.id, type)}
                  label={food.name}
                  name={food.name}
                  foodThemeId={foodThemeId}
                  isDashboard={isDashboard}
                  food={food}
                  key={food.name}
                />
                  )
                })}
            </div>
      </div>
  </div>
  )
}

FoodFormOptions.propTypes = {
  foodThemeId: PropTypes.number.isRequired,
  foods: PropTypes.array.isRequired,
  image: PropTypes.string.isRequired,
  isChecked: PropTypes.func.isRequired,
  isDashboard: PropTypes.bool.isRequired,
  onCheck: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
}

export default FoodFormOptions
