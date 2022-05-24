import React from 'react'
import { screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
// import App from '../App'
import '@testing-library/jest-dom/extend-expect'
import { renderWithProvider } from '../../utils/test/renderWithRouterAndProvider'
import { foodOptions } from '../../utils/test/mocks/foodOptions'
import mockAxios from 'axios'
import { act } from 'react-dom/test-utils'
import Main from '../pages/Main'
const dailyOptions = ['Arroz', 'Feijão', 'Misturas', 'Guarnições', 'Bebidas']

globalThis.IS_REACT_ACT_ENVIRONMENT = true

global.setImmediate = global.setTimeout

beforeEach(async () => {
  mockAxios.get.mockImplementationOnce((url) => {
    if (url === '/foods') {
      return Promise.resolve({ data: foodOptions })
    }
  })

  await act(async () => renderWithProvider(<Main />))
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
    const promises = await dailyOptions.map(async option => {
      const dailyOption = await screen.findByText(option)
      expect(dailyOption).toBeInTheDocument()
    })
    await Promise.all(promises)
  })

  it('Order button should open a form', () => {
    const orderButton = screen.getByText(/Pedir/)
    userEvent.click(orderButton)
    expect(screen.getByText(/Confirmar/)).toBeInTheDocument()
  })

  it('Options should render on the food type', async () => {
    const rice = await screen.findByText(/^Arroz branco$/)
    expect(rice).toBeInTheDocument()
  })
})
