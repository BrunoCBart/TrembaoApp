import PropTypes from 'prop-types'
import React, { useState } from 'react'

function FormInput ({ name, label, placeholder, errorMessage, required, ...inputProps }) {
  const [focused, setFocused] = useState(false)

  const handleFocus = () => {
    setFocused(true)
  }
  return (
    <div className="form-group">
      <label htmlFor={`order-${name}`}>{label}<span>{required ? '*' : ''}</span>
        <input
          onBlur={handleFocus}
          id={`order-${name}`}
          {...inputProps}
          focused={focused.toString()}
         />
        <span className='error-msg'>{errorMessage}</span>
      </label>
    </div>
  )
}

FormInput.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired
}

export default FormInput
