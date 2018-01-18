import * as types from "./bus-locations.types";
import axios from "axios";
import { loader } from "../loader/loader.action";

const ROUTES_URL = "http://webservices.nextbus.com/service/publicJSONFeed";

const busAPICall = location => {
	return axios.get(
		`${ROUTES_URL}?command=vehicleLocations&a=sf-muni${
			location ? `&r=${location}` : ""
		}`
	);
};

// fetch busses for all available routes
export const getBusses = () => dispatch => {
	dispatch({ type: types.BUSSES_REQUEST });
	return busAPICall()
		.then(res => {
			return dispatch({
				type: types.BUSSES_SUCCESS,
				payload: res
			});
		})
		.then(() => dispatch(loader(false)))
		.catch(e => {
			dispatch({ type: types.BUSSES_FAILURE, error: e });
		});
};

export const addBusRoute = location => dispatch => {
	dispatch({ type: types.ADD_BUS_REQUEST });
	return busAPICall(location)
		.then(res => {
			dispatch({
				type: types.ADD_BUS_SUCCESS,
				payload: res,
				tag: location
			});
		})
		.catch(e => {
			dispatch({ type: types.BUSSES_FAILURE, error: e });
		});
};

export const toggleBusRoute = (routeTag, bool) => dispatch => {
	//add bus route
	if (bool) {
		return dispatch(addBusRoute(routeTag));
	}
	//delete bus route
	return dispatch({
		type: types.DELETE_BUS,
		deleteByTag: routeTag
	});
};

export const bussesOnHover = (tag) => {
	return {
		type: types.BUSSES_ON_HOVER,
		hoveredRoute: tag
	}
}

export const deleteAllRoutes = () => {
	console.log('action');
	return {
		type: types.DELETE_ALL_ROUTES
	}
}