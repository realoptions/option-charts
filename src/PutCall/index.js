import React from 'react'
import {
  VictoryChart,
  VictoryLine,
  VictoryContainer,
  VictoryScatter,
  VictoryLegend
} from 'victory'

import PropTypes from 'prop-types'
import { 
    DEFAULT_ANIMATE_STYLE, 
    CONTAINER_STYLE, 
    DEFAULT_TITLE_STYLE 
} from '../defaults'

const legendData = (primary, secondary) => [
    { name: 'Call', symbol: { fill: primary } },
    { name: 'Put', symbol: { fill: secondary } }
]
const PutCallChart = ({ 
    call, put, strikes, 
    prices, sensitivity,
    callColor, putColor,
    animateStyle=DEFAULT_ANIMATE_STYLE,
    titleStyle=DEFAULT_TITLE_STYLE
}) => {
    const scatter = strikes.map((v, index) => ({
      strike: v,
      price: prices[index]
    }))
    return (
      <VictoryChart
        containerComponent={<VictoryContainer style={CONTAINER_STYLE} />}
        animate={animateStyle}
      >
        <VictoryLegend
          centerTitle
          title="Calls and Puts"
          {...titleStyle}
          data={legendData(callColor, putColor)}
          orientation="horizontal"
        />
        <VictoryLine
          style={{ data: { stroke: callColor } }}
          data={call}
          x="at_point"
          interpolation="natural"
          y="value"
        />
        <VictoryLine
          style={{ data: { stroke: putColor } }}
          data={put}
          x="at_point"
          interpolation="natural"
          y="value"
        />
        {sensitivity === 'price' && (
          <VictoryScatter
            style={{ data: { stroke: callColor } }}
            data={scatter}
            x="strike"
            interpolation="natural"
            y="price"
          />
        )}
      </VictoryChart>
    )
}

PutCallChart.propTypes = {
  call: PropTypes.arrayOf(
    PropTypes.shape({
      at_point: PropTypes.number.isRequired,
      value: PropTypes.number.isRequired
    })
  ),
  put: PropTypes.arrayOf(
    PropTypes.shape({
      at_point: PropTypes.number.isRequired,
      value: PropTypes.number.isRequired
    })
  ),
  strikes: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  prices: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  sensitivity: PropTypes.string.isRequired
}
export default PutCallChart
