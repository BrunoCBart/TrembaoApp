import React, { useContext } from 'react'
import FoodFormDashboard from '../components/FoodForm/FoodFormDashboard'
import FoodThemes from '../components/FoodForm/FoodThemes'
import trembaoAppContext from '../Context/TrembaoAppContext'
import '../components/FoodForm/foodForm.css'
import Header from '../components/Header/Header'
function Dashboard () {
  const { foodOptions } = useContext(trembaoAppContext)
  console.log(foodOptions)
  const themeIsSelected = foodOptions.length > 0
  return (
    <>
      <Header />
      <section className="main2">
        {themeIsSelected
          ? <FoodFormDashboard foodOptions={foodOptions} />
          : <FoodThemes/>}

      </section>
    </>
  )
}

export default Dashboard
