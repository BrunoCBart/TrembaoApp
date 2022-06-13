import PropTypes from 'prop-types'
import React from 'react'

function FoodFormButton ({ iconClassName, src, ...buttonProps }) {
  return (
    <button {...buttonProps}>
      <img className={iconClassName} src={src} />
    </button>
  )
}

FoodFormButton.propTypes = {
  iconClassName: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
}

export default FoodFormButton
