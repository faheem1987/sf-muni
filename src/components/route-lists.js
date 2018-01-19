import React, { Component } from "react";
import PropTypes from "prop-types";

import { colors } from "../utils";
import "../styles/route-lists.css";

export class RoutesList extends Component {
	constructor(props) {
		super(props);
		this._toggleAllRoutes = this._toggleAllRoutes.bind(this);
		this._toggleBusRoute = this._toggleBusRoute.bind(this);
	}

	_toggleBusRoute(routeTag, bool) {
		event.preventDefault();
		this.props.toggleBusRoute(routeTag, bool);
	}

	_renderRouteLists() {
		const { routesList, routesTag, predictedRoutes } = this.props;
		return routesList.route.map((route, i) => {
			const isChecked = !!routesTag[route.tag];
			const isPredicted = predictedRoutes[route.tag];
			return (
				<label
					key={i}
					className={isPredicted ? "route-name" : "route-name disable"}
					htmlFor={route.tag}
				>
					<input
						type="checkbox"
						value={route.title}
						id={route.tag}
						checked={isChecked}
						onChange={this._toggleBusRoute.bind(this, route.tag, !isChecked)}
						disabled={!isPredicted}
					/>
					<span
						style={{ backgroundColor: isChecked ? colors[routesTag[route.tag]] || "#2ecc71" : "#fff"}}
						className="checkmark"
					/>
					{route.title}
				</label>
			);
		});
	}

	_toggleAllRoutes() {
		this.props.handletoggleAllRoutes();
	}

	render() {
		return (
			<nav className="route-lists">
				{this.props.routesList && [
					<h2 key="header" >San Francisco Bus Routes </h2>,
					<h4 key="sub_header" className="sub-header"> 
						Select any route to see the bus details
					</h4>,
					<button key="toggle_list" className="toggle-list" 
						onClick={this._toggleAllRoutes}>
						Toggle routes
					</button>,
					this._renderRouteLists()
				]}
			</nav>
		);
	}
}

RoutesList.propTypes = {
	routesList: PropTypes.shape({
		route: PropTypes.array
	}),
	routesTag: PropTypes.object,
	predictedRoutes: PropTypes.object,
	toggleBusRoute: PropTypes.func
};

export default RoutesList;
