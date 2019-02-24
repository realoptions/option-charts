import React from 'react'
import './App.css';
import DensityChart from '../../src/Density'
import PutCall from '../../src/PutCall'
import ImpliedVolatility from '../../src/ImpliedVolatility'
const App=()=>{
  return (
    <div className="App">
      <DensityChart
        density={[{ at_point: 5, value: 4 }]}
        value_at_risk={5}
        expected_shortfall={3}
        densityColor='#ff4d4d'
        varColor='#1a0000'
      />
      <PutCall 
        call={[{ value: 5, at_point: 5 }]}
        put={[{ value: 5, at_point: 5 }]}
        strikes={[3]}
        prices={[4]}
        sensitivity="price"
        callColor='#00ffbf'
        putColor='#4000ff'
      />
      <ImpliedVolatility 
        impliedVolatility={[{ at_point: 5, iv: 5 }]}
        lineColor='#ffbf00'
      />
    </div>
  )
}

export default App;
