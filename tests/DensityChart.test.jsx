import React from 'react'
import DensityChart, { getPositiveMax, getVaR } from '../src/Density'

import { render } from '@testing-library/react'


describe('Render', () => {
  it('renders without error with density and not loading', () => {
    render(
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

describe('getPositiveMax', () => {
  it('gets max from array', () => {
    const arr = [{ myKey: 4 }, { myKey: 6 }, { myKey: -2 }]
    const expected = 6
    expect(getPositiveMax(arr, 'myKey')).toEqual(expected)
  })
  it('gets 0 from array with all negative', () => {
    const arr = [{ myKey: -4 }, { myKey: -6 }, { myKey: -2 }]
    const expected = 0
    expect(getPositiveMax(arr, 'myKey')).toEqual(expected)
  })
  it('return zero if empty array', () => {
    const arr = []
    const expected = 0
    expect(getPositiveMax(arr, 'myKey')).toEqual(expected)
  })
})

describe('getVaR', () => {
  it('returns array of x y object', () => {
    const arr = [{ value: 4 }, { value: 6 }]
    const expected = [{ x: -2, y: 0 }, { x: -2, y: 6 }]
    expect(getVaR(2, arr)).toEqual(expected)
  })
  it('returns array of x y object with empty array', () => {
    const arr = []
    const expected = [{ x: -2, y: 0 }, { x: -2, y: 0 }]
    expect(getVaR(2, arr)).toEqual(expected)
  })
})
