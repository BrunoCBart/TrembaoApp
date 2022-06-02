import PropTypes from 'prop-types'
import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import trembaoAppContext from '../Context/TrembaoAppContext'

function ProtectedRoute ({ component: Component }) {
  const { login, getSession } = useContext(trembaoAppContext)

  const navigate = useNavigate()

  useEffect(() => {
    getSession()
  }, [])

  useEffect(() => {
    if (!login) {
      navigate('/admin')
    }
  }, [login])

  const renderDashboard = () => {
    return login
      ? <Component />
      : <div>Carregando...</div>
  }

  return (
    renderDashboard()
  )
}

ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired
}

export default ProtectedRoute
