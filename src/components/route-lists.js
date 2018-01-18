import React, { Component } from "react";
import PropTypes from "prop-types";

import "../styles/route-lists.css";

export class RoutesInfo extends Component {
	constructor(props) {
		super(props);
		this._onhandleMouse = this._onhandleMouse.bind(this);
		this._toggleAllRoutes = this._toggleAllRoutes.bind(this);
	}

	_toggleBusRoute(routeTag, bool) {
		event.preventDefault();
		this.props.toggleBusRoute(routeTag, bool);
	}

	_onhandleMouse(tag=null) {
		this.props.bussesOnHover(tag)
	}

	_renderRouteLists() {
		const { routesList, routesTagList, predictedRoutes } = this.props;
		return routesList.route.map((route, i) => {
			const isChecked = !!routesTagList[route.tag];
			const isPredicted = predictedRoutes[route.tag];
			const checkedBoxProperties = {
				isChecked,
				color: routesTagList[route.tag]
					? routesTagList[route.tag].color
					: "#fff"
			};
			return (
				<label
					className={isPredicted ? "route-name" : "route-name disable"}
					for={route.tag}
					onMouseEnter={() => this._onhandleMouse(route.tag)}
					onMouseLeave={() => this._onhandleMouse()}
				>
					<input
						type="checkbox"
						value={route.title}
						id={route.tag}
						checked={checkedBoxProperties.isChecked}
						onChange={() => this._toggleBusRoute(route.tag, !isChecked)}
						disabled={!isPredicted}
					/>
					<span
						style={{ backgroundColor: checkedBoxProperties.color }}
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
			<div className="route-lists">
				{this.props.routesList && [
					<h2>San Francisco Bus Routes </h2>,
					<h4 className="sub-header"> Select any route to see the bus details</h4>,
					<button className="toggle-list" 
						onClick={this._toggleAllRoutes}>
						Toggle routes
					</button>,
					this._renderRouteLists()
				]}
			</div>
		);
	}
}

Map.propTypes = {
	routesList: PropTypes.shape({
		route: PropTypes.array
	}),
	toggleBusRoute: PropTypes.func
};

export default RoutesInfo;
