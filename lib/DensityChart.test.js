"use strict";

var _react = _interopRequireDefault(require("react"));

var _DensityChart = _interopRequireWildcard(require("./DensityChart"));

var _enzyme = require("enzyme");

var _victory = require("victory");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Render', () => {
  it('renders without error with density and not loading', () => {
    (0, _enzyme.shallow)(_react.default.createElement(_DensityChart.default, {
      density: [{
        at_point: 5,
        value: 4
      }],
      value_at_risk: 5,
      expected_shortfall: 3,
      densityColor: "#ff4d4d",
      varColor: "#1a0000"
    }));
  });
});
describe('functionality', () => {
  it('has chart if density exists', () => {
    const densityChart = (0, _enzyme.mount)(_react.default.createElement(_DensityChart.default, {
      density: [{
        at_point: 5,
        value: 4
      }],
      value_at_risk: 5,
      expected_shortfall: 3,
      densityColor: "#ff4d4d",
      varColor: "#1a0000"
    }));
    expect(densityChart.find(_victory.VictoryChart).length).toEqual(1);
  });
});
describe('getMax', () => {
  it('gets max from array', () => {
    const arr = [{
      myKey: 4
    }, {
      myKey: 6
    }, {
      myKey: -2
    }];
    const expected = 6;
    expect((0, _DensityChart.getMax)(arr, 'myKey')).toEqual(expected);
  });
  it('gets max from array with all negative', () => {
    const arr = [{
      myKey: -4
    }, {
      myKey: -6
    }, {
      myKey: -2
    }];
    const expected = -2;
    expect((0, _DensityChart.getMax)(arr, 'myKey')).toEqual(expected);
  });
});
describe('getVaR', () => {
  it('returns array of x y object', () => {
    const arr = [{
      value: 4
    }, {
      value: 6
    }];
    const expected = [{
      x: -2,
      y: 0
    }, {
      x: -2,
      y: 6
    }];
    expect((0, _DensityChart.getVaR)({
      value_at_risk: 2
    }, arr)).toEqual(expected);
  });
});