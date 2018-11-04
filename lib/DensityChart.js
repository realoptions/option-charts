"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getVaR = exports.getMax = void 0;

var _react = _interopRequireDefault(require("react"));

var _victory = require("victory");

var _defaults = require("./defaults");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

//exported for testing
const getMax = (data, key) => data.reduce((aggr, cur) => {
  return cur[key] > aggr ? cur[key] : aggr;
}, Number.NEGATIVE_INFINITY); //exported for testing


exports.getMax = getMax;

const getVaR = (riskMetrics, density) => [{
  x: -riskMetrics.value_at_risk,
  y: 0
}, {
  x: -riskMetrics.value_at_risk,
  y: getMax(density, 'value')
}];

exports.getVaR = getVaR;

const DensityChart = ({
  density,
  densityColor,
  varColor,
  value_at_risk,
  expected_shortfall,
  animateStyle = _defaults.DEFAULT_ANIMATE_STYLE,
  titleStyle = _defaults.DEFAULT_TITLE_STYLE,
  fixedDecimals = 4
}) => _react.default.createElement(_victory.VictoryChart, {
  animate: animateStyle,
  containerComponent: _react.default.createElement(_victory.VictoryContainer, {
    style: _defaults.CONTAINER_STYLE
  })
}, _react.default.createElement(_victory.VictoryLabel, _extends({}, titleStyle, {
  x: 53,
  text: ['Risk Neutral Density', `Value at Risk: ${value_at_risk.toFixed(fixedDecimals)}`, `Expected Shortfall: ${expected_shortfall.toFixed(fixedDecimals)}`]
})), _react.default.createElement(_victory.VictoryLine, {
  style: {
    data: {
      stroke: densityColor
    }
  },
  data: density,
  x: "at_point",
  interpolation: "natural",
  y: "value"
}), _react.default.createElement(_victory.VictoryLine, {
  style: {
    data: {
      stroke: varColor
    }
  },
  data: getVaR(riskMetrics, density)
}));

DensityChart.propTypes = {
  density: _propTypes.default.arrayOf(_propTypes.default.shape({
    at_point: _propTypes.default.number.isRequired,
    value: _propTypes.default.number.isRequired
  })).isRequired,
  value_at_risk: _propTypes.default.number,
  expected_shortfall: _propTypes.default.number,
  varColor: _propTypes.default.string.isRequired,
  densityColor: _propTypes.default.string.isRequired
};
var _default = DensityChart;
exports.default = _default;