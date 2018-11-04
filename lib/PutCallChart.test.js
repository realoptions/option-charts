"use strict";

var _react = _interopRequireDefault(require("react"));

var _PutCallChart = _interopRequireDefault(require("./PutCallChart"));

var _enzyme = require("enzyme");

var _victory = require("victory");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Render', () => {
  it('renders without error with put/call and loading', () => {
    (0, _enzyme.shallow)(_react.default.createElement(_PutCallChart.default, {
      call: [{
        value: 5,
        at_point: 5
      }],
      put: [{
        value: 5,
        at_point: 5
      }],
      strikes: [3],
      prices: [4],
      sensitivity: "price",
      callColor: "#00ffbf",
      putColor: "#4000ff"
    }));
  });
});
describe('functionality', () => {
  it('has chart if density exists', () => {
    const putCallChart = (0, _enzyme.mount)(_react.default.createElement(_PutCallChart.default, {
      call: [{
        value: 5,
        at_point: 5
      }],
      put: [{
        value: 5,
        at_point: 5
      }],
      strikes: [3],
      prices: [4],
      sensitivity: "price",
      callColor: "#00ffbf",
      putColor: "#4000ff"
    }));
    expect(putCallChart.find(_victory.VictoryChart).length).toEqual(1);
  });
  it('shows scatter if sensitity is equal to "price"', () => {
    const putCallChart = (0, _enzyme.mount)(_react.default.createElement(_PutCallChart.default, {
      call: [{
        value: 5,
        at_point: 5
      }],
      put: [{
        value: 5,
        at_point: 5
      }],
      strikes: [3],
      prices: [4],
      sensitivity: "price",
      callColor: "#00ffbf",
      putColor: "#4000ff"
    }));
    expect(putCallChart.find(_victory.VictoryScatter).length).toBeGreaterThan(0);
  });
  it('does not show scatter if sensitity is not equal to "price"', () => {
    const putCallChart = (0, _enzyme.mount)(_react.default.createElement(_PutCallChart.default, {
      call: [{
        value: 5,
        at_point: 5
      }],
      put: [{
        value: 5,
        at_point: 5
      }],
      strikes: [3],
      prices: [4],
      sensitivity: "not price",
      callColor: "#00ffbf",
      putColor: "#4000ff"
    }));
    expect(putCallChart.find(_victory.VictoryScatter).length).toEqual(0);
  });
});