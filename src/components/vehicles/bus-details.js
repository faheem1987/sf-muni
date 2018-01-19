import React from "react";
import { colors } from "../../utils";

export default ({busDetails}) => {
	return  busDetails ? (
		<div className="bus-details" style={{ backgroundColor: colors[busDetails.routeTag] }}>
			<div>
				<h4>Route Tag</h4>
				{busDetails.routeTag}
			</div>
			<div>
				<h4>Heading To</h4>
				{busDetails.heading}
			</div>
			<div>
				<h4>Speed</h4>
				{busDetails.speed}
			</div>
		</div>
	) : null;
};