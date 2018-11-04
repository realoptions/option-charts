"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _victory = require("victory");

var _defaults = require("./defaults");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const ImpliedVolatilityChart = ({
  impliedVolatility,
  animateStyle = _defaults.DEFAULT_ANIMATE_STYLE,
  lineColor,
  titleStyle = _defaults.DEFAULT_TITLE_STYLE
}) => _react.default.createElement(_victory.VictoryChart, {
  containerComponent: _react.default.createElement(_victory.VictoryContainer, {
    style: _defaults.CONTAINER_STYLE
  }),
  animate: animateStyle
}, _react.default.createElement(_victory.VictoryLabel, _extends({}, titleStyle, {
  text: "Implied Volatility"
})), _react.default.createElement(_victory.VictoryLine, {
  style: {
    data: {
      stroke: lineColor
    }
  },
  data: impliedVolatility,
  x: "at_point",
  interpolation: "natural",
  y: "iv"
}));

ImpliedVolatilityChart.propTypes = {
  impliedVolatility: _propTypes.default.arrayOf(_propTypes.default.shape({
    at_point: _propTypes.default.number.isRequired,
    iv: _propTypes.default.number.isRequired
  }))
};
var _default = ImpliedVolatilityChart;
exports.default = _default;