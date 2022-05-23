import { useRoutes } from 'react-router-dom'
import Login from './components/Admin/Login'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'
import Main from './pages/Main'
import { useEffect } from 'react'
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
    { path: '/admin', element: <Login /> },
    { path: '/admin/dashboard', element: <ProtectedRoute component={Dashboard}/> }
    // ...
  ])
  return routes
}

export default App
