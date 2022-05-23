import PropTypes from 'prop-types'
import React from 'react'

function Orders ({ orders }) {
  const handleActiveOrder = (id) => {
    const foodOption = document.querySelector(`.order-${id}`)
    if (foodOption.classList.contains('order--active')) {
      foodOption.classList.remove('order--active')
      return
    }
    const previousOrder = document.querySelector('.order--active')
    if (previousOrder) previousOrder.classList.remove('order--active')
    foodOption.classList.add('order--active')
  }

  const renderOrders = () => {
    return orders.map((order) => (
      <div
        key={`order-${order.id}`}
        onClick={() => handleActiveOrder(order.id)}
        className="order-container"
       >
         11:00 - {'15,00R$'}
        <div className={`order order-${order.id}`}>
          <p>{`Nome: ${order.name}`}</p>
          <p>{`Telefone: ${order.phone}`}</p>
          <p>{`Bairro: ${order.district}`}</p>
          <p>{`Rua: ${order.street}`}</p>
          <p>{`Número: ${order.number}`}</p>
          <ul>
            {order.foods.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
    ))
  }
  return (
    <section className="dashboard__orders">
      <h1>Pedidos</h1>
      {renderOrders()}
    </section>
  )
}

Orders.propTypes = {
  orders: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Orders
