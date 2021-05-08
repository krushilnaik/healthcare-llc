import React from "react";
import { Route, Switch } from "react-router";

import "./App.scss";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";

function App() {
	return (
		<Switch>
			<Route exact path='/' render={() => <Home />} />
			<Route exact path='/(sign[ -_]{0,1}in)' render={() => <SignIn />} />
		</Switch>
	);
}

export default App;
