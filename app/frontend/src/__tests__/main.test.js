// import App from '../App'
import '@testing-library/jest-dom/extend-expect'
import { cleanup, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import mockAxios from 'axios'
import React from 'react'
import { foodOptions, dailyFoodOptions } from '../../utils/test/mocks/Foods'
import { renderWithProvider } from '../../utils/test/renderWithRouterAndProvider'
import Main from '../pages/Main'

global.setImmediate = global.setTimeout

beforeEach(() => {
  mockAxios.get.mockImplementationOnce((url) => {
    if (url === '/foods') {
      return Promise.resolve({ data: foodOptions })
    }
  })

  waitFor(() => renderWithProvider(<Main />))
})

afterEach(cleanup)

describe('Test main page (user order request page)', () => {
  it('Page should render a header', () => {
    const restaurantTitle = screen.getByText(/Trembão/)
    expect(restaurantTitle).toBeInTheDocument()
  })

  it('Page should render daily options title and subtitle', () => {
    const makeYourOrderTitle = screen.getByText(/Faça já seu pedido!/)
    const dailyOptionsSubtitle = screen.getByText(/Opções do dia/)
    expect(makeYourOrderTitle).toBeInTheDocument()
    expect(dailyOptionsSubtitle).toBeInTheDocument()
  })

  it('Page should render daily options', async () => {
    const promises = await dailyFoodOptions.map(async option => {
      const dailyOption = await screen.findByText(option)
      expect(dailyOption).toBeInTheDocument()
    })
    await Promise.all(promises)
  })

  it('Order button should open order form', () => {
    const orderButton = screen.getByText(/Pedir/)
    userEvent.click(orderButton)
    expect(screen.getByText(/Confirmar/)).toBeInTheDocument()
  })

  it('Options should render in the food type', async () => {
    const rice = await screen.findByText(/^Arroz branco$/)
    expect(rice).toBeInTheDocument()
  })
})
