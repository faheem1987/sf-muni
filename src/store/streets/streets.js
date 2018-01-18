import * as types from "./streets.types";

const initialState = {
	streets: null
};

export default (state = initialState, action = {}) => {
	switch (action.type) {
	case types.STREETS_INFO_SUCCESS:
		return {
			...state,
			streets: action.payload.data.features
		};
	default:
		return {
			...state
		};
	}
};
