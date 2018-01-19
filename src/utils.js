import { geoEquirectangular } from "d3-geo";

export const drawProjection = (width = 800, height = 450) =>
	geoEquirectangular()
		.center([-122.433701, 37.767683])
		.scale(300000) //170000
		.translate([width / 1.95, height / 1.65]);

export const parsedData = vehicle => {
	const parsedStopes = {
		type: "Feature",
		geometry: {
			type: "Point",
			coordinates: [vehicle.lon / 1, vehicle.lat / 1, 0]
		},
		routeTag: vehicle.routeTag,
		speed: vehicle.speedKmHr,
		heading: vehicle.heading
	};
	return parsedStopes;
};

export const colors = {
	1: "#1abc9c",
	2: "#2ecc71",
	3: "#3498db",
	5: "#9b59b6",
	6: "#34495e",
	7: "#16a085",
	8: "#27ae60",
	9: "#6B9362",
	10: "#16a085",
	12: "#2ecc71",
	14: "#27ae60",
	18: "#4caf50",
	19: "#8bc34a",
	21: "#cddc39",
	22: "#3498db",
	23: "#2980b9",
	24: "#34495e",
	25: "#2c3e50",
	27: "#2196f3",
	28: "#03a9f4",
	29: "#00bcd4",
	30: "#009688",
	31: "#e74c3c",
	33: "#c0392b",
	35: "#f44336",
	36: " #e67e22",
	37: "#d35400",
	38: "#f39c12",
	39: "#ff9800",
	43: "#ff5722",
	44: "#ffc107",
	45: "#f1c40f",
	47: "#ffeb3b",
	48: "#9b59b6",
	49: "#8e44ad",
	52: "#9c27b0",
	54: "#673ab7",
	55: "#e91e63",
	56: "#3f51b5",
	57: "#607d8b",
	66: "#9e9e9e",
	67: "#7f8c8d",
	"14R": "#95a5a6",
	"9R": "#bdc3c7",
	"38R": "#6c6575",
	"5R": "#9D2933",
	"28R": "#763568",
	"24MC": "#19B5FE",
	C: "#7A942E",
	E: "#006442",
	F: "#A17917",
	J: "#5D3F6A",
	KT: "#59ABE3",
	L: "#044F67",
	M: "#407A52",
	N: "#03A678",
	PH: "#E08A1E",
	PM: "#BFBFBF"
};
