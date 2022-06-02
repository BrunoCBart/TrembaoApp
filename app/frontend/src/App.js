import { useRoutes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'
import Main from './pages/Main'
import { useEffect, useState } from 'react'
import Admin from './pages/Admin'
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

  function CalculateFactorial () {
    const [number, setNumber] = useState(1)
    const [inc, setInc] = useState(0)
    console.log(inc)
    const factorial = factorialOf(number)
    const onChange = event => {
      setNumber(Number(event.target.value))
    }
    const onClick = () => setInc(i => i + 1)

    return (
    <div>
      Factorial of
      <input type="number" value={number} onChange={onChange} />
      is {factorial}
      <button onClick={onClick}>Re-render</button>
    </div>
    )
  }
  function factorialOf (n) {
    console.log('factorialOf(n) called!')
    return n <= 0 ? 1 : n * factorialOf(n - 1)
  }

  const routes = useRoutes([
    { path: '/', element: <Main /> },
    { path: '/admin', element: <Admin /> },
    { path: '/admin/dashboard', element: <ProtectedRoute component={Dashboard}/> },
    { path: '/calculate-factorial', element: <CalculateFactorial /> }
    // ...
  ])
  return routes
}

export default App
