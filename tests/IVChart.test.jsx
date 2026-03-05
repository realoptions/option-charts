import React from 'react'
import ImpliedVolatilityChart from '../src/ImpliedVolatility'
import { render } from '@testing-library/react'

describe('Render', () => {
  it('renders without error with density and not loading', () => {
    render(
      <ImpliedVolatilityChart
        impliedVolatility={[{ at_point: 5, iv: 5 }]}
        lineColor='#ffbf00'
      />
    )
  })
})