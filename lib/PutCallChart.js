"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _victory = require("victory");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _defaults = require("./defaults");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const legendData = (primary, secondary) => [{
  name: 'Call',
  symbol: {
    fill: primary
  }
}, {
  name: 'Put',
  symbol: {
    fill: secondary
  }
}];

const PutCallChart = ({
  call,
  put,
  strikes,
  prices,
  sensitivity,
  callColor,
  putColor,
  animateStyle = _defaults.DEFAULT_ANIMATE_STYLE,
  titleStyle = _defaults.DEFAULT_TITLE_STYLE
}) => {
  const scatter = strikes.map((v, index) => ({
    strike: v,
    price: prices[index]
  }));
  return _react.default.createElement(_victory.VictoryChart, {
    containerComponent: _react.default.createElement(_victory.VictoryContainer, {
      style: _defaults.CONTAINER_STYLE
    }),
    animate: animateStyle
  }, _react.default.createElement(_victory.VictoryLegend, _extends({
    centerTitle: true,
    title: "Calls and Puts"
  }, titleStyle, {
    data: legendData(primary, secondary),
    orientation: "horizontal"
  })), _react.default.createElement(_victory.VictoryLine, {
    style: {
      data: {
        stroke: callColor
      }
    },
    data: call,
    x: "at_point",
    interpolation: "natural",
    y: "value"
  }), _react.default.createElement(_victory.VictoryLine, {
    style: {
      data: {
        stroke: putColor
      }
    },
    data: put,
    x: "at_point",
    interpolation: "natural",
    y: "value"
  }), sensitivity === 'price' && _react.default.createElement(_victory.VictoryScatter, {
    style: {
      data: {
        stroke: callColor
      }
    },
    data: scatter,
    x: "strike",
    interpolation: "natural",
    y: "price"
  }));
};

PutCallChart.propTypes = {
  call: _propTypes.default.arrayOf(_propTypes.default.shape({
    at_point: _propTypes.default.number.isRequired,
    value: _propTypes.default.number.isRequired
  })),
  put: _propTypes.default.arrayOf(_propTypes.default.shape({
    at_point: _propTypes.default.number.isRequired,
    value: _propTypes.default.number.isRequired
  })),
  strikes: _propTypes.default.arrayOf(_propTypes.default.number.isRequired).isRequired,
  prices: _propTypes.default.arrayOf(_propTypes.default.number.isRequired).isRequired,
  sensitivity: _propTypes.default.string.isRequired
};
var _default = PutCallChart;
exports.default = _default;