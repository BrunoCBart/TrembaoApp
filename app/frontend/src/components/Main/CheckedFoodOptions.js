import PropTypes from 'prop-types'
import React from 'react'
import FoodOptions from '../FoodOptions/FoodOptions'
function DailyFoodOptions ({
  checkedFoodOptions, handleActiveFoodType,
  checkFoodOption, isFoodOptionChecked
}) {
  const renderCheckedFoodOptions = () => {
    return checkedFoodOptions.length > 0 && checkedFoodOptions.map(({ foodType, foods }) => (
      <div className={'foodOptionsForm-type-container foodOptionsForm-container--main'}
       key={foodType}
       >
       <div className="foodOptionsForm-type-container--main__type"
        onClick={() => handleActiveFoodType(foodType)}
        >
         <h2 className="food-options__type-title">{foodType}</h2>
       </div>
       <div className={`foodOptionsForm__food-options-container food-type-${foodType}`}>
       <FoodOptions
          foods={foods}
          foodType={foodType}
          onCheck={checkFoodOption}
          isChecked={isFoodOptionChecked}
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
