import React, { Component } from "react";
import { connect } from "react-redux";
import SFOStreetsMap from "../components/sfo-streets-map";
import RouteLists from "../components/route-lists";
import Loader from "../components/loader";

import { getStreetsInfo } from "../store/streets/streets.action";
import { getRoutesList } from "../store/routes/routes.action";
import {
	getBusses,
	toggleBusRoute,
	bussesOnHover,
	deleteAllRoutes
} from "../store/bus-locations/bus-locations.action";

import "../styles/sf-muni.css";

class SfMuni extends Component {
	constructor(props) {
		super(props);
		this._onHandletoggleAllRoutes = this._onHandletoggleAllRoutes.bind(this);
	}

	componentDidMount() {
		const { getStreetsInfo, getBusses, getRoutesList } = this.props;
		getStreetsInfo()
			.then(() => {
				getBusses();
			})
			.then(() => {
				getRoutesList();
			});
	}

	_onHandletoggleAllRoutes() {
		const {routesTagList} = this.props;
		if(Object.keys(routesTagList).length) {
			this.props.deleteAllRoutes();
		} else {
			this.props.getBusses();
		}
	}

	render() {
		const {
			getBusses,
			toggleBusRoute,
			streets,
			busLocations,
			routesList,
			routesTagList,
			predictedRoutes,
			isPageLoading,
			bussesOnHover,
			hoveredRoute,
			deleteRoutes,
			deleteAllRoutes
		} = this.props;
		return (
			<div className="sf-muni">
				{isPageLoading ? (
					<Loader />
				) : (
					[
						<RouteLists
							routesList={routesList}
							getBusses={getBusses}
							toggleBusRoute={toggleBusRoute}
							routesTagList={routesTagList}
							predictedRoutes={predictedRoutes}
							bussesOnHover={bussesOnHover}
							handletoggleAllRoutes={this._onHandletoggleAllRoutes}
						/>,
						<SFOStreetsMap
							streets={streets}
							busLocations={busLocations}
							getBusses={getBusses}
							routesTagList={routesTagList}
							hoveredRoute={hoveredRoute}
						/>
					]
				)}
			</div>
		);
	}
}

export default connect(
	state => ({
		streets: state.streets.streets,
		busLocations: state.busLocations.busLocations,
		routesTagList: state.busLocations.routesTagList,
		predictedRoutes: state.busLocations.predictedRoutes,
		routesList: state.routes.routesList,
		isPageLoading: state.loader.isLoading,
		hoveredRoute: state.busLocations.hoveredRoute
		
	}),
	{
		getStreetsInfo,
		getBusses,
		getRoutesList,
		toggleBusRoute,
		bussesOnHover,
		deleteAllRoutes
	}
)(SfMuni);
