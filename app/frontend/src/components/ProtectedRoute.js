import PropTypes from 'prop-types'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import auth from '../tools/auth/auth'
import trembaoAppContext from '../Context/TrembaoAppContext'

function ProtectedRoute ({ component: Component }) {
  const [loadingSession, setLoadingSession] = useState(true)
  const { login } = useContext(trembaoAppContext)

  const navigate = useNavigate()

  const getSession = async () => {
    await auth.getSession(navigate)
    setLoadingSession(false)
  }

  useEffect(() => {
    getSession()
      .catch(error => console.log(error))
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
