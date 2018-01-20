import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SFOStreetsMap from "../components/sfo-streets-map";
import RouteLists from "../components/route-lists";
import Loader from "../components/loader";
import Streets from "../components/streets";
import Vehicles from "../components/vehicles/vehicles";
import BusDetails from "../components/vehicles/bus-details";

import { getStreetsInfo } from "../store/streets/streets.action";
import { getRoutesList } from "../store/routes/routes.action";
import {
	getBusses,
	toggleBusRoute,
	showBusDetails,
	deleteAllRoutes
} from "../store/bus-locations/bus-locations.action";

import "../styles/sf-muni.css";
import "../styles/error.css";
import "../styles/header.css";
import "../styles/footer.css";

/*
	<SfMuni>
		<RouteLists />
		<SFOStreetsMap>
			<Vehicles />
		</SFOStreetsMap>
	</SfMuni>
*/

class SfMuni extends Component {
	constructor(props) {
		super(props);
		this.state = { hoveredTag: "" };
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
		const {routesTag} = this.props;
		if(Object.keys(routesTag).length) {
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
			routesTag,
			predictedRoutes,
			isPageLoading,
			busDetails,
			showBusDetails,
			error
		} = this.props;
		return [
			<div className="sf-muni">
				{ isPageLoading && <Loader /> }

				<header className="header">
						ThousandEyes
				</header>

				{error && <div className="error-alert">{error}</div>}

				{!isPageLoading && !error &&
					<section className="main-container">
						<RouteLists
							key="route_list"
							routesList={routesList}
							getBusses={getBusses}
							toggleBusRoute={toggleBusRoute}
							routesTag={routesTag}
							predictedRoutes={predictedRoutes}
							handletoggleAllRoutes={this._onHandletoggleAllRoutes}
						/>

						<section className="map-info-container">
							<SFOStreetsMap key="sf_map">
								<Streets streets={streets} />
								{busLocations &&
									busLocations.vehicle && (
										<g>
											<Vehicles
												vehicles={busLocations.vehicle}
												getBusses={getBusses}
												routesTag={routesTag}
												showBusDetails={showBusDetails}
											/>
										</g>
									)}
							</SFOStreetsMap>

							<BusDetails 
								busDetails={busDetails}
								routesTag={routesTag} />
						</section>
					</section>
				} 
			</div>,
			<footer className="footer">
				© 2018, project given by ThousandEyes, Inc. All rights reserved.
			</footer>
		];
	}
}

SfMuni.propTypes = {
	getStreetsInfo: PropTypes.func,
	getBusses: PropTypes.func,
	getRoutesList: PropTypes.func,
	isPageLoading: PropTypes.bool,
	routesTag: PropTypes.object,
	busDetails: PropTypes.object
};

export default connect(
	state => ({
		streets: state.streets.streets,
		busLocations: state.busLocations.busLocations,
		routesTag: state.busLocations.routesTag,
		predictedRoutes: state.busLocations.predictedRoutes,
		busDetails: state.busLocations.busDetails,
		routesList: state.routes.routesList,
		isPageLoading: state.loader.isLoading,
		error: state.error.error
		
	}),
	{
		getStreetsInfo,
		getBusses,
		getRoutesList,
		toggleBusRoute,
		showBusDetails,
		deleteAllRoutes
	}
)(SfMuni);
