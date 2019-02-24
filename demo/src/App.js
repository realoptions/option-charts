import React from 'react'
import './App.css';
import DensityChart from './option-charts/Density'
import PutCall from './option-charts/PutCall'
import ImpliedVolatility from './option-charts/ImpliedVolatility'
const App=()=>{
  return (
    <div className="App">
      <DensityChart
        density={[{ at_point: 5, value: 4 }, {at_point: 5.5, value: 4.5}]}
        value_at_risk={5}
        expected_shortfall={3}
        densityColor='#ff4d4d'
        varColor='#1a0000'
      />
      <PutCall 
        call={[{ value: 5, at_point: 5 }, { value: 5.5, at_point: 3.5 }]}
        put={[{ value: 5, at_point: 5 }, { value: 5.5, at_point: 4.5 }]}
        strikes={[3]}
        prices={[4]}
        sensitivity="price"
        callColor='#00ffbf'
        putColor='#4000ff'
      />
      <ImpliedVolatility 
        impliedVolatility={[{ at_point: 5, iv: 5 }, { at_point: 5.5, iv: 3 }]}
        lineColor='#ffbf00'
      />
    </div>
  )
}

export default App;
