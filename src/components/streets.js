import React, { Component } from "react";
import PropTypes from "prop-types";
import { geoPath } from "d3-geo";

import { drawProjection } from "../utils";

class Streets extends Component {
	render() {
		const { streets } = this.props;
		return (
			<g className="streets">
				{streets.map((d, i) => {
					return (
						<path
							key={`path-${i}`}
							className="street"
							d={geoPath().projection(drawProjection(800, 450))(d)}
							fill={`rgba(38,50,56,${1 / streets.length * i})`}
							// fill={ interpolateSpectral(1 / this.state.geographyPaths.length * i) }
							stroke={"rgb(102, 51, 153)"}
							strokeWidth={0.5}
						/>
					);
				})}
			</g>
		);
	}
}

Streets.propTypes = {
	streets: PropTypes.array
};

export default Streets;
