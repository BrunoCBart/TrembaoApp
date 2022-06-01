import PropTypes from 'prop-types'
import React, { useContext } from 'react'
// import FoodOption from '../FoodOptions/FoodOption'
import trembaoAppContext from '../../Context/TrembaoAppContext'
import axios from '../../api/axios'
import '../FoodOptions/foodOptionsForm.css'
import FoodOptions from '../FoodOptions/FoodOptions'

const FOODS_URL = '/foods'
function FoodOptionsDashboard ({ currentType }) {
  const { foodOptions, getFoodOptions } = useContext(trembaoAppContext)

  const optionOnCheck = async (id) => {
    try {
      await axios.put(`${FOODS_URL}/${id}/check`)
      await getFoodOptions()
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <form className="foodOptionsForm">
      {foodOptions.length > 0 && foodOptions
        .filter(({ foodType }) => foodType === currentType)
        .map(({ foodType, foods }) => (
        <div className="foodOptionsForm-type-container" key={foodType}>
          <h2>{foodType}</h2>
          <div className="foodOptionsForm__food-options-container food-type--active">
          <FoodOptions
            foods={foods}
            foodType={foodType}
            onCheck={optionOnCheck}
            isDashBoard={true}
          />
          </div>
        </div>
        ))}
    </form>
  )
}

FoodOptionsDashboard.propTypes = {
  currentType: PropTypes.string.isRequired
}

export default FoodOptionsDashboard
