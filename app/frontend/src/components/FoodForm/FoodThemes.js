import React, { useContext, useEffect, useState } from 'react'
import { getFoodThemes } from '../../api/trembao'
import trembaoAppContext from '../../context/TrembaoAppContext'

function FoodThemes () {
  const [foodThemes, setFoodThemes] = useState([])
  const { getFoodsByTheme } = useContext(trembaoAppContext)

  useEffect(() => {
    getFoodThemes()
      .then((themes) => setFoodThemes(themes))
  }, [])

  return (
    <section className='foodTheme-container'>
      <h1>Opções</h1>
      {foodThemes.map((theme) => (
        <div role="button" key={theme.name} className="foodTheme" onClick={() => getFoodsByTheme(theme.id)}>
          <h3 className="foodTheme__title">{theme.name}</h3>
          <img className="foodTheme__image" src={theme.image} alt={theme.name} />
        </div>
      ))}
    </section>
  )
}

export default FoodThemes
