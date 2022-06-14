import { useRoutes } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import { useEffect } from 'react'
import Admin from './pages/Admin'
import Main from './pages/Main'
import Dashboard from './pages/Dashboard'
import './Css/form.css'
// import socket from './socket'

function App () {
  useEffect(() => {
    // socket.on('connect', () => {
    //   console.log('connected')
    // })
    // socket.on('disconnect', () => {
    //   console.log('disconnected')
    // })
  }, [])

  const routes = useRoutes([
    { path: '/', element: <Main /> },
    { path: '/admin', element: <Admin /> },
    { path: '/admin/dashboard', element: <ProtectedRoute component={Dashboard}/> }
    // ...
  ])
  return routes
}

export default App
