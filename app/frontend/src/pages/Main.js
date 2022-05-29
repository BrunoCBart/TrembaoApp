import React, { useContext } from 'react'
import '../components/Main/main.css'
import FoodOptionsMain from '../components/Main/FoodOptionsMain'
import Header from '../components/Header/Header'
import trembaoAppContext from '../Context/TrembaoAppContext'
function Main () {
  const { price } = useContext(trembaoAppContext)
  return (
    <>
      <Header>
        <span id="price">
          {price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </span>
      </Header>
    <section aria-label="Opções do dia" className="main">
      <header className="main__header">
        <h1 className="main__title">Faça já seu pedido!</h1>
        <p className="main__subtitle">Opções do dia</p>
      </header>
      <FoodOptionsMain />
    </section>
    </>
  )
}

export default Main
