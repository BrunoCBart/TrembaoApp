import React, { useContext, useEffect, useState } from 'react'
import { getFoodThemes } from '../../api/trembao'
import trembaoAppContext from '../../Context/TrembaoAppContext'

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
        <div key={theme} className="foodTheme" onClick={() => getFoodsByTheme(theme.id)}>
          <h2 className="foodTheme__title">{theme.name}</h2>
          <img className="foodTheme__image" src={theme.image} alt={theme.name} />
        </div>
      ))}
    </section>
  )
}

export default FoodThemes
