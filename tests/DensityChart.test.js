import React from 'react'
import DensityChart, { getMax, getVaR } from '../src/Density'

import { shallow, mount } from 'enzyme'
import { VictoryChart } from 'victory'


describe('Render', () => {
  it('renders without error with density and not loading', () => {
    shallow(
      <DensityChart
        density={[{ at_point: 5, value: 4 }]}
        value_at_risk={5}
        expected_shortfall={3}
        densityColor='#ff4d4d'
        varColor='#1a0000'
      />
    )
  })
})
describe('functionality', () => {
  it('has chart if density exists', () => {
    const densityChart = mount(
      <DensityChart
        density={[{ at_point: 5, value: 4 }]}
        value_at_risk={5}
        expected_shortfall={3}
        densityColor='#ff4d4d'
        varColor='#1a0000'
      />
    )
    expect(densityChart.find(VictoryChart).length).toEqual(1)
  })
})

describe('getMax', () => {
  it('gets max from array', () => {
    const arr = [{ myKey: 4 }, { myKey: 6 }, { myKey: -2 }]
    const expected = 6
    expect(getMax(arr, 'myKey')).toEqual(expected)
  })
  it('gets max from array with all negative', () => {
    const arr = [{ myKey: -4 }, { myKey: -6 }, { myKey: -2 }]
    const expected = -2
    expect(getMax(arr, 'myKey')).toEqual(expected)
  })
})

describe('getVaR', () => {
  it('returns array of x y object', () => {
    const arr = [{ value: 4 }, { value: 6 }]
    const expected = [{ x: -2, y: 0 }, { x: -2, y: 6 }]
    expect(getVaR(2, arr)).toEqual(expected)
  })
})
