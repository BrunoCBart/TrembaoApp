import React from 'react'
import { render } from '@testing-library/react'
import TrembaoAppProvider from '../Context/TrembaoAppProvider'
import { MemoryRouter } from 'react-router-dom'

const renderWithRouterAndProvider = (component, route = '/') => {
  return ({
    ...render(
    <TrembaoAppProvider>
      <MemoryRouter initialEntries={[route]}>
        {component}
      </MemoryRouter>
    </TrembaoAppProvider>
    )
  })
}

export default renderWithRouterAndProvider
