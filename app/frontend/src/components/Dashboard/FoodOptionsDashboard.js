import PropTypes from 'prop-types'
import React, { useContext } from 'react'
// import FoodOption from '../FoodOptions/FoodOption'
import trembaoAppContext from '../../Context/TrembaoAppContext'
import axios from '../../api/axios'
import '../FoodOptions/foodOptionsForm.css'
import FoodOptions from '../FoodOptions/FoodOptions'
import Pen from '../svgs/Pen'

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

  const EditBtn = () => {
    return (
      <button className="food-option-edit-btn" onClick={() => ''}>
        <Pen className="food-option-edit-pen" />
      </button>
    )
  }

  return (
    <form className="foodOptionsForm">
      {foodOptions.length > 0 && foodOptions.filter(({ name }) => name === currentType).map(({ name, foods }) => (
        <div className="foodOptionsForm-type-container" key={name}>
          <h2>{name}</h2>
          <div className="foodOptionsForm__food-options-container food-type--active">
          <FoodOptions
            foods={foods}
            TypeName={name}
            onCheck={optionOnCheck}
            isDashBoard={true}
            editFoodBtn={EditBtn()}
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
