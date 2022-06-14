import React, { useContext } from 'react'
import FoodFormDashboard from '../components/FoodForm/FoodFormDashboard'
import FoodThemes from '../components/FoodForm/FoodThemes'
import trembaoAppContext from '../context/TrembaoAppContext'
import '../components/FoodForm/foodForm.css'
import Header from '../components/Header/Header'
import FoodEditForm from '../components/FoodForm/FoodEditForm'
function Dashboard () {
  const { foodOptions, price, foodToEdit } = useContext(trembaoAppContext)
  const themeIsSelected = foodOptions.length > 0
  return (
    <>
      <Header>
      <span id="price">
          {price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </span>
      </Header>
      <section className="main" aria-label="Opções do dia">
        {themeIsSelected
          ? <FoodFormDashboard foodOptions={foodOptions} />
          : <FoodThemes/>}
          {foodToEdit && (
            <FoodEditForm
              foodToEdit={foodToEdit}
              setFoodToEdit={foodToEdit}
            />
          )}

      </section>
    </>
  )
}

export default Dashboard
