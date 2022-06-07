import PropTypes from 'prop-types'
import React from 'react'

function ErrorMessage ({ error, name }) {
  console.log(name === 'name' ? error : '')
  return (
    <div className={`error-msg error-${name}`}>
      <p>{error}</p>
    </div>
  )
}

ErrorMessage.propTypes = {
  error: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default ErrorMessage
