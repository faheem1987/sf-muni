import * as types from "./streets.types";
import { loader } from "../loader/loader.action";
import axios from "axios";

export const getStreetsInfo = () => dispatch => {
	dispatch({ type: types.STREETS_INFO_REQUEST });
	dispatch(loader(true));
	return axios
		.get("../../../maps-data/streets.json")
		.then(res => {
			return dispatch({ type: types.STREETS_INFO_SUCCESS, payload: res });
		})
		.catch(e => {
			return dispatch({ type: types.STREETS_INFO_FAILURE, error: e });
		});
};
