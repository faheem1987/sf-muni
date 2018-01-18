import React, { Component } from "react";
import PropTypes from "prop-types";
import { geoPath } from "d3-geo";

import Bus from "./bus";
import { drawProjection, parsedData } from "../../utils";
import { setInterval } from "timers";

class Vehicles extends Component {
	constructor(props) {
		super(props);
		this._updateVehicleLocation = this._updateVehicleLocation.bind(this);
	}

	componentDidMount() {
		setInterval(this._updateVehicleLocation, 15000);
	}

	_updateVehicleLocation() {
		this.props.getBusses();
	}

	render() {
		const { vehicles, routesTagList, hoveredRoute } = this.props;
		const parsedVehicleLocation = vehicles.map((v, i) =>
			parsedData(v, i, vehicles.length)
		);

		return (
			<g>
				{parsedVehicleLocation.map((d, i) => {
					return (
						<g
							key={i}
							transform={`translate(${geoPath()
								.projection(drawProjection())
								.centroid(d)})`}
						>
							<Bus
								width={d.routeTag === hoveredRoute ? "30" : "10"}
								height={d.routeTag === hoveredRoute ? "30" : "10"}
								color={
									routesTagList[d.routeTag]
										? routesTagList[d.routeTag].color
										: "#fff"
								}
							/>
						</g>
					);
				})}
			</g>
		);
	}
}

Vehicles.propTypes = {
	vehicles: PropTypes.array
};

export default Vehicles;
