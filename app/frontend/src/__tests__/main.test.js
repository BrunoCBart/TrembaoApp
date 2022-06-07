import '@testing-library/jest-dom/extend-expect'
import { cleanup, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import mockAxios from 'axios'
import React from 'react'
import { foodOptions, foodTypes, foodThemes } from '../utils/mocks/Foods'
import { renderWithRouterAndProvider } from '../utils/mocks/renderWithRouterAndProvider'
import Main from '../pages/Main'

global.setImmediate = global.setTimeout

beforeEach(() => {
  mockAxios.get.mockImplementation((url) => {
    console.log(url)
    if (url === '/foods/themes/1') return Promise.resolve({ data: foodOptions })
    if (url === '/foods/themes') return Promise.resolve({ data: foodThemes })
  })

  waitFor(() => renderWithRouterAndProvider(<Main />))
})

afterEach(cleanup)

describe('Test main page (user order request page)', () => {
  it('Page should render a header', () => {
    const restaurantTitle = screen.getByText(/Trembão/)
    expect(restaurantTitle).toBeInTheDocument()
  })

  it('Page should render daily options title and subtitle', async () => {
    const mainTitle = screen.getByText(/Opções/)
    const themeTitle = await screen.findByText(/marmitex/i)
    expect(mainTitle).toBeInTheDocument()
    expect(themeTitle).toBeInTheDocument()
  })

  it('Page should render daily options', async () => {
    const promises = await foodThemes.map(async (theme) => {
      const themeTitle = await screen.findByText(theme.name)
      expect(themeTitle).toBeInTheDocument()
    })
    await Promise.all(promises)
  })

  // it('Order button should open order form', async () => {
  //   const themeButton = await screen.findByText(/marmitex/i)
  //   userEvent.click(themeButton)
  //   const orderButton = await screen.findByRole('button', { name: /make-order/i })
  //   userEvent.click(orderButton)
  //   expect(await screen.findByRole('button', { name: /confirm-order/i })).toBeInTheDocument()
  // })

  // it('Options should render in the food type', async () => {
  //   const rice = await screen.findByText(/^Arroz branco$/)
  //   expect(rice).toBeInTheDocument()
  // })
})
