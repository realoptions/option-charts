import React from 'react'
import PutCallChart from '../src/PutCall'
import { shallow, mount } from 'enzyme'
import { VictoryChart, VictoryScatter } from 'victory'

describe('Render', () => {

  it('renders without error with put/call and loading', () => {
    shallow(
      <PutCallChart
        call={[{ value: 5, at_point: 5 }]}
        put={[{ value: 5, at_point: 5 }]}
        strikes={[3]}
        prices={[4]}
        sensitivity="price"
        callColor='#00ffbf'
        putColor='#4000ff'
      />
    )
  })

})
describe('functionality', () => {
  it('has chart if density exists', () => {
    const putCallChart = mount(
      <PutCallChart
        call={[{ value: 5, at_point: 5 }]}
        put={[{ value: 5, at_point: 5 }]}
        strikes={[3]}
        prices={[4]}
        sensitivity="price"
        callColor='#00ffbf'
        putColor='#4000ff'
      />
    )
    expect(putCallChart.find(VictoryChart).length).toEqual(1)
  })
  it('shows scatter if sensitity is equal to "price"', () => {
    const putCallChart = mount(
      <PutCallChart
        call={[{ value: 5, at_point: 5 }]}
        put={[{ value: 5, at_point: 5 }]}
        strikes={[3]}
        prices={[4]}
        sensitivity="price"
        callColor='#00ffbf'
        putColor='#4000ff'
      />
    )
    expect(putCallChart.find(VictoryScatter).length).toBeGreaterThan(0)
  })
  it('does not show scatter if sensitity is not equal to "price"', () => {
    const putCallChart = mount(
      <PutCallChart
        call={[{ value: 5, at_point: 5 }]}
        put={[{ value: 5, at_point: 5 }]}
        strikes={[3]}
        prices={[4]}
        sensitivity="not price"
        callColor='#00ffbf'
        putColor='#4000ff'
      />
    )
    expect(putCallChart.find(VictoryScatter).length).toEqual(0)
  })
})
