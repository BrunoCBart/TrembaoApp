import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import trembaoAppContext from '../../Context/TrembaoAppContext'
function FoodType ({ setType }) {
  const { foodOptions } = useContext(trembaoAppContext)

  const renderFoodTypes = () => {
    return foodOptions.map(({ foodType }) => (
      <div className="food-type" key={foodType} onClick={() => setType(foodType)}>
        <h2>{foodType}</h2>
      </div>
    ))
  }

  return (
    <div className="food-types">
      {renderFoodTypes()}
    </div>
  )
}

FoodType.propTypes = {
  setType: PropTypes.func.isRequired
}

export default FoodType
