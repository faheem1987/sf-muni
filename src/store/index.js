import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import reducers from "./reducers";
import SfMuni from "../container/sf-muni";

const App = () => {
	const store = createStore(reducers, {}, applyMiddleware(thunk));
	return (
		<Provider store={store}>
			<SfMuni />
		</Provider>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
