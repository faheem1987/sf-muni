export default (state = {error: null}, action) =>{
	
	switch(action.type) {
	case "HAS_ERROR": {
		return {
			...state,
			error: action.e || "Some went wrong please try again"
		};
	}
	default:
		return {
			...state
		};
	}
};