import '@testing-library/jest-dom/extend-expect'
import { cleanup, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import mockAxios from 'axios'
import React from 'react'
import { foodOptions, foodTypes, foodThemes } from '../_testMocks_/Foods'
import { renderWithRouterAndProvider } from '../_testMocks_/renderWithRouterAndProvider'
import Main from '../pages/Main'

globalThis.IS_REACT_ACT_ENVIRONMENT = true

global.setImmediate = global.setTimeout

beforeEach(async () => {
  mockAxios.get.mockImplementation((url) => {
    console.log(url)
    if (url === '/foods/themes/1') return Promise.resolve({ data: foodOptions })
    if (url === '/foods/themes') return Promise.resolve({ data: foodThemes })
    if (url === '/foods/types') return Promise.resolve({ data: foodTypes })
  })

  await waitFor(async () => await renderWithRouterAndProvider(<Main />))
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

  it('Theme button should render theme types', async () => {
    const themeButton = await screen.findByText(/marmitex/i)
    expect(themeButton).toBeInTheDocument()
    userEvent.click(themeButton)
    await waitForElementToBeRemoved(() => screen.getByText(/marmitex/i))
    const promises = await foodTypes.map(async (type) => {
      const typeTitle = await screen.findByTestId(type.name)
      console.log(typeTitle)
      expect(typeTitle).toBeInTheDocument()
    })
    await Promise.all(promises)
  })
})
