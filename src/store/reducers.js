import { combineReducers } from "redux";

import streetsReducer from "../store/streets/streets";
import routesReducer from "../store/routes/routes";
import busLocations from "../store/bus-locations/bus-locations";
import loaderReducer from "../store/loader/loader";

export default combineReducers({
	streets: streetsReducer,
	routes: routesReducer,
	busLocations,
	loader: loaderReducer
});
