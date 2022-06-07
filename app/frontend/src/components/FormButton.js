import PropTypes from 'prop-types'
import React from 'react'

function FormButton ({ children, ...props }) {
  return (
    <button {...props}>
      { children }
    </button>
  )
}

FormButton.propTypes = {
  children: PropTypes.node
}

export default FormButton
