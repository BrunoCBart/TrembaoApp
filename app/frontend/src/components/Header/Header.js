import PropTypes from 'prop-types'
import React from 'react'
import logo from '../../images/logo.png'
import './header.css'
function Header ({ children }) {
  return (
    <header className="header">
      <div className="header__container">
        <a href="/"><input className="trembao" type="image" src={logo}/></a>
        <a href="/" className="header__logo-title">
          <span>Trembão</span>
          <span>Restaurante</span>
        </a>
        {children}
      </div>
    </header>
  )
}

Header.propTypes = {
  children: PropTypes.node
}

export default Header
