import { combineReducers } from "redux";

import streets from "../store/streets/streets";
import routes from "../store/routes/routes";
import busLocations from "../store/bus-locations/bus-locations";
import loader from "../store/loader/loader";
import error from "../store/error/error";

export default combineReducers({
	streets,
	routes,
	busLocations,
	loader,
	error
});
