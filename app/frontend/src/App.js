import { useRoutes } from 'react-router-dom'
// import Dashboard from './pages/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'
import { useEffect } from 'react'
import Admin from './pages/Admin'
// import FoodForm from './components/FoodForm/FoodForm'
import Main from './pages/Main'
// import socket from './socket'
import Dashboard from './pages/Dashboard'

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
