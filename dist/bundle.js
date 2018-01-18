webpackJsonp([0],{

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var loader = exports.loader = function loader(bool) {
	return {
		type: "IS_LOADING",
		isLoading: bool
	};
};

/***/ }),

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(49);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _redux = __webpack_require__(22);

var _reactRedux = __webpack_require__(33);

var _reduxThunk = __webpack_require__(64);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(150);

var _reducers2 = _interopRequireDefault(_reducers);

var _sfMuni = __webpack_require__(155);

var _sfMuni2 = _interopRequireDefault(_sfMuni);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
	var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default));
	return _react2.default.createElement(
		_reactRedux.Provider,
		{ store: store },
		_react2.default.createElement(_sfMuni2.default, null)
	);
};

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById("root"));

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(22);

var _streets = __webpack_require__(151);

var _streets2 = _interopRequireDefault(_streets);

var _routes = __webpack_require__(152);

var _routes2 = _interopRequireDefault(_routes);

var _vLocation = __webpack_require__(153);

var _vLocation2 = _interopRequireDefault(_vLocation);

var _loader = __webpack_require__(154);

var _loader2 = _interopRequireDefault(_loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
	streets: _streets2.default,
	routes: _routes2.default,
	vLocation: _vLocation2.default,
	loader: _loader2.default
});

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _streets = __webpack_require__(65);

var types = _interopRequireWildcard(_streets);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var initialState = {
	streets: null
};

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	switch (action.type) {
		case "IS_LOADING":
			return _extends({}, state, {
				isLoading: action.isLoading
			});
		case types.STREETS_INFO_SUCCESS:
			return _extends({}, state, {
				streets: action.payload.data.features
			});
		default:
			return _extends({}, state);
	}
};

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _routes = __webpack_require__(66);

var types = _interopRequireWildcard(_routes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var initialState = {
	routes: null,
	routesList: null,
	initialRoutes: [],
	testingArr: ["N", "E", "XR", "4", "5"]
};

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	switch (action.type) {
		case types.ROUTES_INFO_SUCCESS:
			return _extends({}, state, {
				routes: action.payload.data
			});
		case types.ROUTES_LIST_SUCCESS:
			return _extends({}, state, {
				routesList: action.payload.data,
				initialRoutes: action.initialRoutes.slice(0, 5)
			});
		default:
			return _extends({}, state);
	}
};

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _vLocation = __webpack_require__(67);

var types = _interopRequireWildcard(_vLocation);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = {
	vLocation: null,
	initialVLocations: [],
	selectedRoutesTag: []
};

var vLocationHelper = function vLocationHelper(state, currentLocation) {
	var vLocation = state.vLocation;

	if (!vLocation) {
		return currentLocation;
	}

	return _extends({}, vLocation, {
		vehicle: [].concat(_toConsumableArray(vLocation.vehicle), _toConsumableArray(currentLocation.vehicle))
	});
};

var initalSelectdRoutes = function initalSelectdRoutes(state, action) {
	return state.initialVLocations.length ? state.initialVLocations.slice(0, state.initialVLocations.length - 1) : action.initialVLocations;
};

var getUpdatedVLocations = function getUpdatedVLocations(state, index) {
	return _extends({}, state.vLocation, {
		vehicle: [].concat(_toConsumableArray(state.vLocation.vehicle.slice(0, index)), _toConsumableArray(state.vLocation.vehicle.slice(index - 1)))
	});
};

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	switch (action.type) {
		case types.V_LOCATION_SUCCESS:
			{
				return _extends({}, state, {
					vLocation: vLocationHelper(state, action.payload.data),
					initialVLocations: initalSelectdRoutes(state, action),
					selectedRoutesTag: [].concat(_toConsumableArray(state.selectedRoutesTag), [action.selectedRoutesTag])
				});
			}
		case types.V_LOCATION_REMOVE:
			return _extends({}, state, {
				vLocation: getUpdatedVLocations(state, action.routeTag)
			});
		default:
			return _extends({}, state);
	}
};

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var initialState = {
	isLoading: false
};

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	switch (action.type) {
		case "IS_LOADING":
			return _extends({}, state, {
				isLoading: action.isLoading
			});
		default:
			return _extends({}, state);
	}
};

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(33);

var _map = __webpack_require__(156);

var _map2 = _interopRequireDefault(_map);

var _routeLists = __webpack_require__(256);

var _routeLists2 = _interopRequireDefault(_routeLists);

var _streets = __webpack_require__(259);

var _routes = __webpack_require__(278);

var _vLocation = __webpack_require__(279);

var _sfMuni = __webpack_require__(280);

var _sfMuni2 = _interopRequireDefault(_sfMuni);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SfMuni = function (_Component) {
	_inherits(SfMuni, _Component);

	function SfMuni(props) {
		_classCallCheck(this, SfMuni);

		return _possibleConstructorReturn(this, (SfMuni.__proto__ || Object.getPrototypeOf(SfMuni)).call(this, props));
	}

	_createClass(SfMuni, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			this.props.testing();
			var _props = this.props,
			    getStreetsInfo = _props.getStreetsInfo,
			    getVLocation = _props.getVLocation,
			    getRoutesList = _props.getRoutesList;

			getStreetsInfo().then(function () {
				getRoutesList();
			}).then(function () {
				getVLocation();
			});
		}
	}, {
		key: "render",
		value: function render() {
			var _props2 = this.props,
			    streets = _props2.streets,
			    routes = _props2.routes,
			    vLocation = _props2.vLocation,
			    getVLocation = _props2.getVLocation,
			    routesList = _props2.routesList,
			    selectedRoutesTag = _props2.selectedRoutesTag,
			    initialVLocactions = _props2.initialVLocactions,
			    toggleRoutes = _props2.toggleRoutes;

			return _react2.default.createElement(
				"div",
				{ className: "sf-muni" },
				_react2.default.createElement(_routeLists2.default, {
					routesList: routesList,
					getVLocation: getVLocation,
					selectedRoutesTag: selectedRoutesTag,
					toggleRoutes: toggleRoutes
				}),
				streets && _react2.default.createElement(_map2.default, {
					streets: streets,
					routes: routes,
					vLocation: vLocation,
					getVLocation: getVLocation,
					initialVLocactions: initialVLocactions
				})
			);
		}
	}]);

	return SfMuni;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
	return {
		streets: state.streets.streets,
		routes: state.routes.routes,
		vLocation: state.vLocation.vLocation,
		routesList: state.routes.routesList,
		initialVLocactions: state.vLocation.initialVLocations,
		initialRoutes: state.routes.initialRoutes,
		isLoading: state.loader.isLoading,
		selectedRoutesTag: state.vLocation.selectedRoutesTag,
		t: state.vLocation.t
	};
}, {
	getStreetsInfo: _streets.getStreetsInfo,
	getVLocation: _vLocation.getVLocation,
	getRoutesList: _routes.getRoutesList,
	toggleRoutes: _vLocation.toggleRoutes,
	testing: _vLocation.testing
})(SfMuni);

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _streets = __webpack_require__(157);

var _streets2 = _interopRequireDefault(_streets);

var _routes = __webpack_require__(201);

var _routes2 = _interopRequireDefault(_routes);

var _vehicleLocation = __webpack_require__(202);

var _vehicleLocation2 = _interopRequireDefault(_vehicleLocation);

var _map = __webpack_require__(253);

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Map = function Map(_ref) {
	var streets = _ref.streets,
	    routes = _ref.routes,
	    vLocation = _ref.vLocation,
	    getVLocation = _ref.getVLocation,
	    initialVLocactions = _ref.initialVLocactions;

	return _react2.default.createElement(
		"div",
		{ className: "map-container" },
		_react2.default.createElement(
			"svg",
			{ className: "map", width: 800, height: 600 },
			_react2.default.createElement(_streets2.default, { streets: streets }),
			vLocation && vLocation.vehicle && _react2.default.createElement(_vehicleLocation2.default, {
				vLocation: vLocation.vehicle,
				getVLocation: getVLocation,
				initialVLocactions: initialVLocactions
			})
		)
	);
};

Map.propTypes = {
	vLocation: _propTypes2.default.array
};

exports.default = Map;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _d3Geo = __webpack_require__(23);

var _utils = __webpack_require__(95);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Streets = function (_Component) {
	_inherits(Streets, _Component);

	function Streets() {
		_classCallCheck(this, Streets);

		return _possibleConstructorReturn(this, (Streets.__proto__ || Object.getPrototypeOf(Streets)).apply(this, arguments));
	}

	_createClass(Streets, [{
		key: "render",
		value: function render() {
			var streets = this.props.streets;

			return _react2.default.createElement(
				"g",
				{ className: "streets" },
				streets.map(function (d, i) {
					return _react2.default.createElement("path", {
						key: "path-" + i,
						className: "street",
						d: (0, _d3Geo.geoPath)().projection((0, _utils.drawProjection)(800, 450))(d),
						fill: "rgba(38,50,56," + 1 / streets.length * i + ")"
						// fill={ interpolateSpectral(1 / this.state.geographyPaths.length * i) }
						, stroke: "rgb(102, 51, 153)",
						strokeWidth: 0.5
					});
				})
			);
		}
	}]);

	return Streets;
}(_react.Component);

Streets.propTypes = {
	streets: _propTypes2.default.array
};

exports.default = Streets;

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// import React, { Component } from "react";
// import { geoPath } from "d3-geo";

// import { drawProjection } from "../utils";

// const baseClass = "routes";

// class Routes extends Component {
//   parseRouteStops(stop) {
//     const parsedStopes = {
//       type: "Feature",
//       properties: { title: stop.title },
//       geometry: {
//         type: "Point",
//         coordinates: [stop.lon / 1, stop.lat / 1, 0]
//       }
//     };
//     return parsedStopes;
//   }
//   render() {
//     const { routes } = this.props;
//     const { color } = routes.route;
//     const parsedStopes = routes.route.stop.map(s => this.parseRouteStops(s));

//     return (
//       <g>
//         {parsedStopes.map((d, i) => {
//           return (
//             <path
//               key={i}
//               d={geoPath().projection(drawProjection())(d)}
//               className="routeStop"
//               fill={color}
//               stroke={color}
//               strokeWidth={0.5}
//             />
//           );
//         })}
//       </g>
//     );
//   }
// }

// export default Routes;


/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _d3Geo = __webpack_require__(23);

var _d3ScaleChromatic = __webpack_require__(96);

var _utils = __webpack_require__(95);

var _timers = __webpack_require__(251);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VLocation = function (_Component) {
	_inherits(VLocation, _Component);

	function VLocation(props) {
		_classCallCheck(this, VLocation);

		var _this = _possibleConstructorReturn(this, (VLocation.__proto__ || Object.getPrototypeOf(VLocation)).call(this, props));

		_this.updateVehicleLocation = _this.updateVehicleLocation.bind(_this);
		return _this;
	}

	_createClass(VLocation, [{
		key: "componentWillReceiveProps",
		value: function componentWillReceiveProps(newProps) {
			var initialVLocactions = newProps.initialVLocactions;

			this.getVlocationHelper(initialVLocactions);
		}
	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			var initialVLocactions = this.props.initialVLocactions;

			this.getVlocationHelper(initialVLocactions);
			(0, _timers.setInterval)(this.updateVehicleLocation, 15000);
		}
	}, {
		key: "updateVehicleLocation",
		value: function updateVehicleLocation() {
			this.props.getVLocation("E");
		}
	}, {
		key: "getVlocationHelper",
		value: function getVlocationHelper(initialVLocactions) {
			var length = initialVLocactions.length;
			if (length) {
				var routeTag = initialVLocactions[length - 1].tag;
				this.props.getVLocation(routeTag);
			}
		}
	}, {
		key: "render",
		value: function render() {
			var vLocation = this.props.vLocation;

			var parsedVehicleLocation = vLocation.map(function (v) {
				return (0, _utils.parsedData)(v);
			});
			return _react2.default.createElement(
				"g",
				null,
				parsedVehicleLocation.map(function (d, i) {
					return _react2.default.createElement("path", {
						key: i,
						d: (0, _d3Geo.geoPath)().projection((0, _utils.drawProjection)())(d),
						className: "routeStop",
						fill: (0, _d3ScaleChromatic.interpolateSpectral)(1 / vLocation.length * i),
						stroke: (0, _d3ScaleChromatic.interpolateSpectral)(1 / vLocation.length * i),
						strokeWidth: 0.5
					});
				})
			);
		}
	}]);

	return VLocation;
}(_react.Component);

VLocation.propTypes = {
	vLocation: _propTypes2.default.array,
	initialVLocactions: _propTypes2.default.array,
	getVLocation: _propTypes2.default.func
};

exports.default = VLocation;

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(252);
exports.setImmediate = setImmediate;
exports.clearImmediate = clearImmediate;


/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(32), __webpack_require__(3)))

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(254);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(47)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./map.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./map.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)(false);
// imports


// module
exports.push([module.i, ".map-container{\n\twidth: 70%;\n\tfloat: right;\n\tpadding-top: 20px;\n}\n\n.map {\n\twidth: 1024px;\n\theight: 90vh;\n}", ""]);

// exports


/***/ }),

/***/ 255:
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.RoutesInfo = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _routeLists = __webpack_require__(257);

var _routeLists2 = _interopRequireDefault(_routeLists);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RoutesInfo = exports.RoutesInfo = function (_Component) {
	_inherits(RoutesInfo, _Component);

	function RoutesInfo(props) {
		_classCallCheck(this, RoutesInfo);

		var _this = _possibleConstructorReturn(this, (RoutesInfo.__proto__ || Object.getPrototypeOf(RoutesInfo)).call(this, props));

		_this.state = {
			isRouteSelected: false
		};
		return _this;
	}

	_createClass(RoutesInfo, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			var selectedRoutesTag = this.props.selectedRoutesTag;

			if (selectedRoutesTag) {
				//last tag in the lastest routed selected by user
				this.isRouteSelected(selectedRoutesTag, selectedRoutesTag[selectedRoutesTag.length - 1]);
			}
		}
	}, {
		key: "componentWillReceiveProps",
		value: function componentWillReceiveProps(newProps) {
			var selectedRoutesTag = newProps.selectedRoutesTag;

			if (selectedRoutesTag) {
				//last tag in the lastest routed selected by user
				this.isRouteSelected(selectedRoutesTag, selectedRoutesTag[selectedRoutesTag.length - 1]);
			}
		}
	}, {
		key: "toggleRoutes",
		value: function toggleRoutes(tag, bool, index) {
			this.props.toggleRoutes(tag, bool, index);
		}
	}, {
		key: "isRouteSelected",
		value: function isRouteSelected(selectedRoutesTag, tag) {
			selectedRoutesTag.indexOf(tag) >= 0 ? this.setState({
				isRouteSelected: true
			}) : this.setState({
				isRouteSelected: false
			});
		}
	}, {
		key: "renderRouteLists",
		value: function renderRouteLists() {
			var _this2 = this;

			var _props = this.props,
			    routesList = _props.routesList,
			    selectedRoutesTag = _props.selectedRoutesTag;

			return routesList.route.map(function (route, i) {
				var isChecked = selectedRoutesTag.indexOf(route.tag) >= 0;
				return _react2.default.createElement(
					"label",
					{
						className: "route-name",
						"for": i + "-" + route.tag,
						onClick: function onClick() {
							return _this2.toggleRoutes(route.tag, !isChecked, i);
						}
					},
					_react2.default.createElement("input", {
						type: "checkbox",
						value: route.title,
						id: i + "-" + route.tag,
						checked: isChecked
					}),
					route.title
				);
			});
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "route-lists" },
				this.props.routesList && [_react2.default.createElement(
					"h2",
					null,
					"San Francisco Routes List"
				), _react2.default.createElement(
					"span",
					null,
					" Select any route to see the bus details"
				), this.renderRouteLists()]
			);
		}
	}]);

	return RoutesInfo;
}(_react.Component);

Map.propTypes = {
	routesList: _propTypes2.default.shape({
		route: _propTypes2.default.array
	}),
	selectedRoutesTag: _propTypes2.default.array,
	toggleRoutes: _propTypes2.default.func
};

exports.default = RoutesInfo;

/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(258);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(47)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./route-lists.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./route-lists.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)(false);
// imports


// module
exports.push([module.i, "\n.route-lists {\n\twidth: 20%;\n\tfloat: left;\n\theight: 90vh;\n\toverflow: scroll;\n\tborder-right: 1px solid rgba(0,0,0,0.3);\n}\n\n.route-name {\n\tdisplay: block;\n}\n", ""]);

// exports


/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getStreetsInfo = undefined;

var _streets = __webpack_require__(65);

var types = _interopRequireWildcard(_streets);

var _loader = __webpack_require__(105);

var _axios = __webpack_require__(28);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var getStreetsInfo = exports.getStreetsInfo = function getStreetsInfo() {
	return function (dispatch) {
		dispatch({ type: types.STREETS_INFO_REQUEST });
		dispatch((0, _loader.loader)(true));
		return _axios2.default.get("../../../maps-data/streets.json").then(function (res) {
			return dispatch({ type: types.STREETS_INFO_SUCCESS, payload: res });
		}).catch(function (e) {
			return dispatch({ type: types.STREETS_INFO_FAILURE, error: e });
		});
	};
};

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getRoutesList = undefined;

var _routes = __webpack_require__(66);

var types = _interopRequireWildcard(_routes);

var _axios = __webpack_require__(28);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var BASE_ROUTES_URL = "http://webservices.nextbus.com/service/publicJSONFeed";

// export const getRoutesInfo = (route = "N") => dispatch => {
//   dispatch({ type: types.ROUTES_INFO_REQUEST });
//   axios
//     .get(`${BASE_ROUTES_URL}?command=routeConfig&a=sf-muni&r=${route}`)
//     .then(response =>
//       dispatch({ type: types.ROUTES_INFO_SUCCESS, payload: response })
//     )
//     .catch(error =>
//       dispatch({ type: types.ROUTES_INFO_FAILURE, error: error })
//     );
// };

var getRoutesList = exports.getRoutesList = function getRoutesList() {
	return function (dispatch) {
		dispatch({ type: types.ROUTES_LIST_REQUEST });
		return _axios2.default.get(BASE_ROUTES_URL + "?command=routeList&a=sf-muni").then(function (response) {
			return dispatch({
				type: types.ROUTES_LIST_SUCCESS,
				payload: response,
				initialRoutes: response.data.route
			});
		}).catch(function (error) {
			return dispatch({ type: types.ROUTES_LIST_FAILURE, error: error });
		});
	};
};

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.testing = exports.toggleRoutes = exports.getVLocation = undefined;

var _vLocation = __webpack_require__(67);

var types = _interopRequireWildcard(_vLocation);

var _axios = __webpack_require__(28);

var _axios2 = _interopRequireDefault(_axios);

var _loader = __webpack_require__(105);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var ROUTES_URL = "http://webservices.nextbus.com/service/publicJSONFeed";
//import routeLists from "../../components/route-lists";

var currentTime = new Date().getTime();

var getInitialVLocation = function getInitialVLocation(_ref) {
	var routesList = _ref.routesList;
	return routesList.route.slice(0, 5);
};

var getIntialArr = function getIntialArr(_ref2) {
	var testingArr = _ref2.testingArr;
	return testingArr.slice(0, 3);
};

var getVLocation = exports.getVLocation = function getVLocation(location) {
	return function (dispatch, getState) {
		dispatch({ type: types.V_LOCATION_REQUEST });
		_axios2.default.get(ROUTES_URL + "?command=vehicleLocations&a=sf-muni&r=" + location + "&t=" + currentTime).then(function (res) {
			var _getState = getState(),
			    routes = _getState.routes;

			dispatch({
				type: types.V_LOCATION_SUCCESS,
				payload: res,
				initialVLocations: getInitialVLocation(routes),
				selectedRoutesTag: location
			});
		}).catch(function (e) {
			dispatch({ type: types.V_LOCATION_FAILURE, error: e });
		});
	};
};

var toggleRoutes = exports.toggleRoutes = function toggleRoutes(tag, route, bool) {
	return function (dispatch) {
		if (bool) {
			return dispatch(getVLocation(tag));
		}
		return dispatch({ type: types.V_LOCATION_REMOVE, removedRoute: tag });
	};
};

var testing = exports.testing = function testing() {
	return function (dispatch, getState) {
		var _getState2 = getState(),
		    routes = _getState2.routes;

		var initialArr = getIntialArr(routes);
		while (initialArr.length > 0) {
			var tag = initialArr[initialArr.length - 1];
			initialArr.splice(initialArr.length - 1);
			dispatch(getVLocation(tag));
		}
	};
};

/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(281);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(47)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./sf-muni.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./sf-muni.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)(false);
// imports


// module
exports.push([module.i, ".sf-muni {\n\twidth: 100%;\n}", ""]);

// exports


/***/ }),

/***/ 46:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(255);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var STREETS_INFO_REQUEST = exports.STREETS_INFO_REQUEST = "SF_MUNI_STREETS_INFO_REQUEST";
var STREETS_INFO_SUCCESS = exports.STREETS_INFO_SUCCESS = "SF_MUNI_STREETS_INFO_SUCCESS";
var STREETS_INFO_FAILURE = exports.STREETS_INFO_FAILURE = "SF_MUNI_STREETS_INFO_FAILURE";

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ROUTES_INFO_REQUEST = exports.ROUTES_INFO_REQUEST = "SF_MUNI_ROUTES_INFO_REQUEST";
var ROUTES_INFO_SUCCESS = exports.ROUTES_INFO_SUCCESS = "SF_MUNI_ROUTES_INFO_SUCCESS";
var ROUTES_INFO_FAILURE = exports.ROUTES_INFO_FAILURE = "SF_MUNI_ROUTES_INFO_FAILURE";
var ROUTES_LIST_REQUEST = exports.ROUTES_LIST_REQUEST = "SF_MUNI_ROUTES_LIST_REQUEST";
var ROUTES_LIST_SUCCESS = exports.ROUTES_LIST_SUCCESS = "SF_MUNI_ROUTES_LIST_SUCCESS";
var ROUTES_LIST_FAILURE = exports.ROUTES_LIST_FAILURE = "SF_MUNI_ROUTES_LIST_FAILURE";

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var V_LOCATION_REQUEST = exports.V_LOCATION_REQUEST = "SF_MUNI_V_LOCATION_REQUEST";
var V_LOCATION_SUCCESS = exports.V_LOCATION_SUCCESS = "SF_MUNI_V_LOCATION_SUCCESS";
var V_LOCATION_FAILURE = exports.V_LOCATION_FAILURE = "SF_MUNI_V_LOCATION_FAILURE";
var V_LOCATION_REMOVE = exports.V_LOCATION_REMOVE = "SF_MUNI_V_LOCATION_REMOVE";

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.parsedData = exports.drawProjection = undefined;

var _d3Geo = __webpack_require__(23);

var drawProjection = exports.drawProjection = function drawProjection() {
	var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 800;
	var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 450;
	return (0, _d3Geo.geoMercator)().center([-122.433701, 37.767683]).scale(300000) //170000
	.translate([width / 1.95, height / 1.65]);
};

var parsedData = exports.parsedData = function parsedData(d) {
	var parsedStopes = {
		type: "Feature",
		properties: { title: d.title },
		geometry: {
			type: "Point",
			coordinates: [d.lon / 1, d.lat / 1, 0]
		}
	};
	return parsedStopes;
};

/***/ })

},[111]);