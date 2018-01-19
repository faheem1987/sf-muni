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
							key={i}
							className="street"
							d={geoPath().projection(drawProjection(800, 450))(d)}
							fill="rgba(0,0,0,0.1"
							stroke="rgba(0,0,0,0.1"
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
