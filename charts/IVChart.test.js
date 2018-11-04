import React from 'react'
import ImpliedVolatilityChart from './IVChart'

import { shallow, mount } from 'enzyme'
import { VictoryChart } from 'victory'

describe('Render', () => {
  it('renders without error with density and not loading', () => {
    shallow(
      <ImpliedVolatilityChart
        impliedVolatility={[{ at_point: 5, iv: 5 }]}
        lineColor='#ffbf00'
      />
    )
  })
})
describe('functionality', () => {
  it('has chart if density exists', () => {
    const impliedVolatilityChart = mount(
      <ImpliedVolatilityChart
        impliedVolatility={[{ at_point: 5, iv: 5 }]}
        lineColor='#ffbf00'
      />
    )
    expect(impliedVolatilityChart.find(VictoryChart).length).toEqual(1)
  })
})
