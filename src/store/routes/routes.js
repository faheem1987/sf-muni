import * as types from "./routes.types";

const initialState = {
	routes: null,
	routesList: null
};

export default (state = initialState, action = {}) => {
	switch (action.type) {
	case types.ROUTES_INFO_SUCCESS:
		return {
			...state,
			routes: action.payload.data
		};
	case types.ROUTES_LIST_SUCCESS:
		return {
			...state,
			routesList: action.payload.data
		};
	default:
		return {
			...state
		};
	}
};
