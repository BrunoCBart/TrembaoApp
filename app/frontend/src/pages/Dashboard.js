import React, { useEffect, useState } from 'react'
import FoodOptionsDashboard from '../components/Dashboard/FoodOptionsDashboard'
import FoodTypes from '../components/Dashboard/FoodTypes'
import '../components/Dashboard/dashboard.css'
import Header from '../components/Header/Header'
import DashboardOptions from '../components/Dashboard/DashboardOptions'
import axios from '../api/axios'
import socket from '../socket'
import Orders from '../components/Dashboard/Orders'
// import trembaoAppContext from '../Context/TrembaoAppContext'
function Dashboard () {
  const [currentFoodType, setCurrentFoodType] = useState('Arroz')
  const [orders, setOrders] = useState([])

  // const { foodToEdit } = useContext(trembaoAppContext)
  const getOrders = async () => {
    const response = await axios.get('/orders')
    setOrders(response.data)
  }
  useEffect(() => {
    socket.on('order-created', async () => {
      await getOrders()
    })
    getOrders()
  }, [])

  // const FoodOptionEdit = () => {
  //   return (
  //     <div className="dashboard__food-option-edit-container">
  //       <form className="dashboard__food-option-edit">
  //         <div className="dashboard__food-option-edit-title">
  //           <h2>Editar opção de comida</h2>
  //         </div>
  //       </form >
  //     </div>
  //   )
  // }

  return (
    <main className="main dashboard">
      <Header />
      <h1 className="dashborad__title">Painel de controle</h1>
      <Orders orders={orders}/>
      <DashboardOptions />
      <FoodTypes setType={setCurrentFoodType} />
      <FoodOptionsDashboard currentType={currentFoodType}/>
    </main>
  )
}

export default Dashboard
