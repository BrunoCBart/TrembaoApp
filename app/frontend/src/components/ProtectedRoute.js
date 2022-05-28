import PropTypes from 'prop-types'
import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import trembaoAppContext from '../Context/TrembaoAppContext'

function ProtectedRoute ({ component: Component }) {
  const [loadingSession, setLoadingSession] = useState(true)
  const { login, getSession } = useContext(trembaoAppContext)

  const navigate = useNavigate()

  useEffect(() => {
    getSession(navigate)
      .then(setLoadingSession(false))
  }, [])

  const renderDashboard = () => {
    if (loadingSession) {
      return <div>Loading...</div>
    }
    return login
      ? <Component />
      : <div>You are not authenticated</div>
  }

  return (
    renderDashboard()
  )
}

ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired
}

export default ProtectedRoute
