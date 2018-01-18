import React from "react";
import PropTypes from "prop-types";

import Streets from "./streets";
import Vehicles from "./vehicles/vehicles";

import "../styles/map.css";

const SFOStreetsMap = ({
	streets,
	busLocations,
	getBusses,
	routesTagList,
	hoveredRoute
}) => {
	return (
		<div className="map-container">
			<svg className="map" width={800} height={600}>
				<Streets streets={streets} />
				{busLocations &&
					busLocations.vehicle && (
						<g>
							<Vehicles
								vehicles={busLocations.vehicle}
								getBusses={getBusses}
								routesTagList={routesTagList}
								hoveredRoute={hoveredRoute}
							/>
						</g>
					)}
			</svg>
		</div>
	);
};

SFOStreetsMap.propTypes = {
	busLocations: PropTypes.array
};

export default SFOStreetsMap;
