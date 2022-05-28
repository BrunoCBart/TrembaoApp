import PropTypes from 'prop-types'
import React from 'react'
import FoodOptions from '../FoodOptions/FoodOptions'
function DailyFoodOptions ({
  checkedFoodOptions, handleActiveFoodType,
  checkFoodOption, foodOptionIsChecked
}) {
  const renderCheckedFoodOptions = () => {
    return checkedFoodOptions.length > 0 && checkedFoodOptions.map(({ name, foods }) => (
      <div className={'foodOptionsForm-type-container food-options-container--main'}
       onClick={() => handleActiveFoodType(name)}
       key={name}
       >
       <h2 className="food-options__type">{name}</h2>
       <div className={`foodOptionsForm__food-options-container food-type-${name}`}>
       <FoodOptions
          foods={foods}
          TypeName={name}
          onCheck={checkFoodOption}
          isChecked={foodOptionIsChecked}
          isDashBoard={false}
        />
      </div>
    </div>
    ))
  }
  return renderCheckedFoodOptions()
}

DailyFoodOptions.propTypes = {
  checkedFoodOptions: PropTypes.array.isRequired,
  handleActiveFoodType: PropTypes.func
}

export default DailyFoodOptions
