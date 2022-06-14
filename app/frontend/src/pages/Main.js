import React, { useContext } from 'react'
import FoodThemes from '../components/FoodForm/FoodThemes'
import trembaoAppContext from '../context/TrembaoAppContext'
import '../components/FoodForm/foodForm.css'
import Header from '../components/Header/Header'
import FoodFormMain from '../components/FoodForm/FoodFormMain'
function Main () {
  const { foodOptions } = useContext(trembaoAppContext)
  const themeIsSelected = foodOptions.length > 0
  return (
    <>
      <Header />
      <section className="main">
        {themeIsSelected
          ? <FoodFormMain foodOptions={foodOptions} />
          : <FoodThemes/>}

      </section>
    </>
  )
}

export default Main
