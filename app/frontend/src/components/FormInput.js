import PropTypes from 'prop-types'
import React, { useState } from 'react'

function FormInput ({ name, label, placeholder, errorMessage, required, isDashboard, ...inputProps }) {
  const [focused, setFocused] = useState(false)

  const handleFocus = () => {
    setFocused(true)
  }
  const id = isDashboard ? `${name}-input-dashboard` : `${name}-input`

  return (
    <div className="form-group">
      <label htmlFor={id}>
        <span className="form-label">{required ? `${label}*` : label}</span>
        <input
          name={name}
          onBlur={handleFocus}
          id={id}
          {...inputProps}
          focused={focused.toString()}
         />
        <span className='error-msg'>{errorMessage}</span>
      </label>
    </div>
  )
}

FormInput.propTypes = {
  errorMessage: PropTypes.string,
  isDashboard: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  type: PropTypes.string.isRequired
}

export default FormInput
