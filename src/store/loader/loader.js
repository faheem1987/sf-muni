const initialState = {
	isLoading: true
};
export default (state = initialState, action = {}) => {
	switch (action.type) {
	case "IS_PAGE_LOADING":
		return {
			...state,
			isLoading: action.isLoading
		};
	default:
		return {
			...state
		};
	}
};
