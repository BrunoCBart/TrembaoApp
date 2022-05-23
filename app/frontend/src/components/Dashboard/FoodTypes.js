import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import trembaoAppContext from '../../Context/TrembaoAppContext'
function FoodType ({ setType }) {
  const { foodOptions } = useContext(trembaoAppContext)

  const renderFoodTypes = () => {
    return foodOptions.map(({ name }) => (
      <div className="food-type" key={name} onClick={() => setType(name)}>
        <h2>{name}</h2>
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
