"use strict";

var _react = _interopRequireDefault(require("react"));

var _IVChart = _interopRequireDefault(require("./IVChart"));

var _enzyme = require("enzyme");

var _victory = require("victory");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Render', () => {
  it('renders without error with density and not loading', () => {
    (0, _enzyme.shallow)(_react.default.createElement(_IVChart.default, {
      impliedVolatility: [{
        at_point: 5,
        iv: 5
      }],
      lineColor: "#ffbf00"
    }));
  });
});
describe('functionality', () => {
  it('has chart if density exists', () => {
    const impliedVolatilityChart = (0, _enzyme.mount)(_react.default.createElement(_IVChart.default, {
      impliedVolatility: [{
        at_point: 5,
        iv: 5
      }],
      lineColor: "#ffbf00"
    }));
    expect(impliedVolatilityChart.find(_victory.VictoryChart).length).toEqual(1);
  });
});