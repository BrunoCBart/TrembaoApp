import React from 'react'
import logo from '../../images/logo.png'
import './header.css'
function Header () {
  return (
    <header className="header">
      <a href="/"><input className="trembao" type="image" src={logo}/></a>
      <a href="/" className="header__logo-title">Trembão Restaurante</a>
    </header>
  )
}

export default Header
