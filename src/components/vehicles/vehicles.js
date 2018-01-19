import React, { Component } from "react";
import PropTypes from "prop-types";
import { geoPath } from "d3-geo";

import Bus from "./bus";
import { drawProjection, parsedData, colors } from "../../utils";
import { setInterval } from "timers";

/*
	<Vehicles>
		<Bus />
	</Vehicles>
*/

class Vehicles extends Component {
	constructor(props) {
		super(props);
		this.state = {tag: ""};
		this._updateVehicleLocation = this._updateVehicleLocation.bind(this);
		this._onHover = this._onHover.bind(this);
	}

	componentDidMount() {
		setInterval(this._updateVehicleLocation, 15000);
	}


	_updateVehicleLocation() {
		this.props.getBusses();
	}

	_onHover(route) {
		if(!route) {
			this.setState({tag: null});
			this.props.showBusDetails(route);
			return ;
		}
		this.setState({tag: route.routeTag});
		this.props.showBusDetails(route);
	}

	render() {
		const { vehicles, routesTag } = this.props;
		const parsedVehicleLocation = vehicles.map((v, i) =>
			parsedData(v, i, vehicles.length)
		);
		return (
			<g>
				{parsedVehicleLocation.map((d, i) => {
					return (
						<g
							className="bus-path"
							key={i}
							transform={`translate(${geoPath()
								.projection(drawProjection())
								.centroid(d)})`}
						>
							<Bus
								className="bus"
								width={20}
								height={20}
								color={d.routeTag === this.state.tag ? "#000" : (colors[routesTag[d.routeTag]] ||  "#2ecc71")}
								onHover={(event) => this._onHover(event && d)}
							/>
						</g>
					);
				})}
			</g>
		);
	}
}

Vehicles.propTypes = {
	vehicles: PropTypes.array,
	routesTag: PropTypes.object,
	getBusses: PropTypes.func
};

export default Vehicles;
