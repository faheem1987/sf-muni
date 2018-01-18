import * as types from "./routes.types";
import axios from "axios";

const BASE_ROUTES_URL = "http://webservices.nextbus.com/service/publicJSONFeed";

export const getRoutesList = () => dispatch => {
	dispatch({ type: types.ROUTES_LIST_REQUEST });
	return axios
		.get(`${BASE_ROUTES_URL}?command=routeList&a=sf-muni`)
		.then(response => {
			return dispatch({
				type: types.ROUTES_LIST_SUCCESS,
				payload: response
			});
		})
		.catch(error =>
			dispatch({ type: types.ROUTES_LIST_FAILURE, error: error })
		);
};
