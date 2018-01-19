import React from "react";
import PropTypes from "prop-types";

import "../styles/map.css";

/*
	<SFOStreetsMap>
		<Vehicles />
	</SFOStreetsMap>
*/

const SFOStreetsMap = ({children}) => {
	
	return (
		<div className="map-container">
			<svg className="map" width={800} height={600}>
				{children}
			</svg>
		</div>
	);
};

SFOStreetsMap.propTypes = {
	busLocations: PropTypes.array
};

export default SFOStreetsMap;
