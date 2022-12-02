import React from 'react'
import PutCallChart from '../src/PutCall'
import { render } from '@testing-library/react'

describe('Render', () => {

  it('renders without error with put/call and loading', () => {
    render(
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
  it('has chart if density exists', async () => {
    const putCallChart = render(
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
    expect(await putCallChart.findByText("Calls and Puts")).toBeTruthy()
  })
})
