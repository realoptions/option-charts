import React from 'react'
import {
  VictoryChart,
  VictoryLine,
  VictoryLabel,
  VictoryContainer,
  VictoryAxis
} from 'victory'

import {
    DEFAULT_ANIMATE_STYLE,
    DEFAULT_TITLE_STYLE,
    CONTAINER_STYLE
} from '../defaults'

import PropTypes from 'prop-types'

const ImpliedVolatilityChart = ({ 
    impliedVolatility, animateStyle=DEFAULT_ANIMATE_STYLE,
    lineColor, titleStyle=DEFAULT_TITLE_STYLE
}) => (
      <VictoryChart
        containerComponent={<VictoryContainer style={CONTAINER_STYLE} />}
        animate={animateStyle}
      >
        <VictoryLabel {...titleStyle} text="Implied Volatility" />
        <VictoryLine
          style={{ data: { stroke: lineColor } }}
          data={impliedVolatility}
          x="at_point"
          interpolation="natural"
          y="iv"
        />
        <VictoryAxis label='Strike Price'/>
      </VictoryChart>
)


ImpliedVolatilityChart.propTypes = {
  impliedVolatility: PropTypes.arrayOf(
    PropTypes.shape({
      at_point: PropTypes.number.isRequired,
      iv: PropTypes.number.isRequired
    })
  )
}

export default ImpliedVolatilityChart