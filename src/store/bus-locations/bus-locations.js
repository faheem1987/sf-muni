import * as types from "./bus-locations.types";

const initialState = {
	busLocations: null,
	hoveredRoute: "",
	busDetails: null
};

const addRouteHelper = (state, action) => {
	const { vehicle } = action.payload.data;
	const { tag } = action;
	return {
		updatedRoutes: {
			...state.busLocations,
			vehicle: [...state.busLocations.vehicle, ...vehicle]
		},
		routesTag: {
			...state.routesTag,
			[tag]: tag 
		}
	};
};

const deleteRouteHelper = (state, deleteByTag) => {
	const clonedObj = Object.assign({}, state.routesTag);
	delete clonedObj[deleteByTag];
	return {
		updatedRoutes: {
			...state.busLocations,
			vehicle: [
				...state.busLocations.vehicle.filter(v => v.routeTag !== deleteByTag)
			]
		},
		routesTag: { ...clonedObj }
	};
};

const getRoutesTag = ({ vehicle }) => {
	const tagProps = {};
	vehicle.forEach(r => tagProps[r.routeTag] = r.routeTag);
	return tagProps;
};

export default (state = initialState, action = {}) => {
	switch (action.type) {
	case types.BUSSES_SUCCESS: {
		return {
			...state,
			busLocations: action.payload.data,
			routesTag: getRoutesTag(action.payload.data),
			predictedRoutes: getRoutesTag(action.payload.data)
		};
	}
	case types.ADD_BUS_SUCCESS: {
		const { updatedRoutes, routesTag } = addRouteHelper(state, action);
		return {
			...state,
			busLocations: updatedRoutes,
			routesTag
		};
	}
	case types.DELETE_BUS: {
		const { updatedRoutes, routesTag } = deleteRouteHelper(
			state,
			action.deleteByTag
		);
		return {
			...state,
			busLocations: updatedRoutes,
			routesTag
		};
	}
	case types.DELETE_ALL_ROUTES:
		return {
			...state,
			busLocations: {},
			routesTag: {}
		};
	case types.SHOW_BUS_DETAILS:
		return {
			...state,
			busDetails: action.busDetails
		};
	default:
		return {
			...state
		};
	}
};
