import React from 'react'
import {
  VictoryChart,
  VictoryLine,
  VictoryContainer,
  VictoryLabel
} from 'victory'
import {
    DEFAULT_ANIMATE_STYLE,
    DEFAULT_TITLE_STYLE,
    CONTAINER_STYLE
} from './defaults'
import PropTypes from 'prop-types'

//exported for testing
export const getMax = (data, key) =>
  data.reduce((aggr, cur) => {
    return cur[key] > aggr ? cur[key] : aggr
  }, Number.NEGATIVE_INFINITY)

//exported for testing
export const getVaR = (value_at_risk, density) => [
  {
    x: -value_at_risk,
    y: 0
  },
  {
    x: -value_at_risk,
    y: getMax(density, 'value')
  }
]

const DensityChart=({ 
    density, densityColor, varColor, 
    value_at_risk, expected_shortfall, 
    animateStyle=DEFAULT_ANIMATE_STYLE,
    titleStyle=DEFAULT_TITLE_STYLE,
    fixedDecimals=4
}) =>
    (
      <VictoryChart
        animate={animateStyle}
        containerComponent={<VictoryContainer style={CONTAINER_STYLE} />}
      >
        <VictoryLabel
          {...titleStyle}
          x={53}
          text={[
            'Risk Neutral Density',
            `Value at Risk: ${value_at_risk.toFixed(
                fixedDecimals
            )}`,
            `Expected Shortfall: ${expected_shortfall.toFixed(
                fixedDecimals
            )}`
          ]}
        />
        <VictoryLine
          style={{ data: { stroke: densityColor } }}
          data={density}
          x="at_point"
          interpolation="natural"
          y="value"
        />
        <VictoryLine
          style={{ data: { stroke: varColor } }}
          data={getVaR(value_at_risk, density)}
        />
      </VictoryChart>
    ) 
DensityChart.propTypes = {
    density: PropTypes.arrayOf(
        PropTypes.shape({
        at_point: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired
        })
    ).isRequired,
    value_at_risk: PropTypes.number.isRequired,
    expected_shortfall: PropTypes.number.isRequired,
    varColor:PropTypes.string.isRequired,
    densityColor:PropTypes.string.isRequired
}

export default DensityChart