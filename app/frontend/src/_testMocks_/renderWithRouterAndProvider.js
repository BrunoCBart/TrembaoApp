import React from 'react'
import { render } from '@testing-library/react'
import TrembaoAppProvider from '../context/TrembaoAppProvider'
import { MemoryRouter } from 'react-router-dom'

const renderWithRouterAndProvider = (component, route = '/') => {
  return ({
    ...render(
    <MemoryRouter initialEntries={[route]}>
      <TrembaoAppProvider>
          {component}
      </TrembaoAppProvider>
    </MemoryRouter>
    )
  })
}

export { renderWithRouterAndProvider }
