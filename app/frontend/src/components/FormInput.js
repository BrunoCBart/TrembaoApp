import PropTypes from 'prop-types'
import React from 'react'

function FormInput ({ name, label, placeholder, type, errorMessage, required, ...props }) {
  return (
    <div className="form-group">
      <label htmlFor={`order-${name}`}>{label}<span>{required ? '*' : ''}</span>
        <input
          id={`order-${name}`}
          name={name}
          placeholder={placeholder}
          type={type}
          required={required}
          {...props}
         />
      </label>
      <span className='error-msg'>{errorMessage}</span>
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
