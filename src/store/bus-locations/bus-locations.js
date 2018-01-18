import * as types from "./bus-locations.types";
import { colors } from "../../utils";

const initialState = {
	busLocations: null
};

const addRouteHelper = (state, action) => {
	const { vehicle } = action.payload.data;
	const { tag } = action;
	return {
		updatedRoutes: {
			...state.busLocations,
			vehicle: [...state.busLocations.vehicle, ...vehicle]
		},
		routesTagList: {
			...state.routesTagList,
			[tag]: {
				tag,
				color: colors[tag] || "#000"
			}
		}
	};
};

const deleteRouteHelper = (state, deleteByTag) => {
	const clonedObj = Object.assign({}, state.routesTagList);
	delete clonedObj[deleteByTag];
	return {
		updatedRoutes: {
			...state.busLocations,
			vehicle: [
				...state.busLocations.vehicle.filter(v => v.routeTag !== deleteByTag)
			]
		},
		routesTagList: { ...clonedObj }
	};
};

const getRoutesTag = ({ vehicle }) => {
	const tagProps = {};
	vehicle.forEach(r => {
		tagProps[r.routeTag] = {
			tag: r.routeTag,
			color: colors[r.routeTag] || "#000"
		};
	});
	return tagProps;
};

export default (state = initialState, action = {}) => {
	console.log('hello ', action);
	switch (action.type) {
	case types.BUSSES_SUCCESS: {
		return {
			...state,
			busLocations: action.payload.data,
			routesTagList: getRoutesTag(action.payload.data),
			predictedRoutes: getRoutesTag(action.payload.data)
		};
	}
	case types.ADD_BUS_SUCCESS: {
		const { updatedRoutes, routesTagList } = addRouteHelper(state, action);
		return {
			...state,
			busLocations: updatedRoutes,
			routesTagList
		};
	}
	case types.DELETE_BUS: {
		const { updatedRoutes, routesTagList } = deleteRouteHelper(
			state,
			action.deleteByTag
		);
		return {
			...state,
			busLocations: updatedRoutes,
			routesTagList
		};
	}
	case types.BUSSES_ON_HOVER:
		return {
			...state,
			hoveredRoute: action.hoveredRoute
		}
	case types.DELETE_ALL_ROUTES: {
		return {
			...state,
			busLocations: {},
			routesTagList: {}
		}
	}
	default:
		return {
			...state
		};
	}
};
