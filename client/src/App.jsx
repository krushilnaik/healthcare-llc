import React, { Fragment, useEffect } from "react";
import axios from "axios";

import "./App.scss";

function App() {
	useEffect(() => {
		axios.get("/auth").then(({ data }) => console.log(data));
	});

	return (
		<Fragment>
			<main>
				<h1>HealthCare, LLC.</h1>
			</main>
		</Fragment>
	);
}

export default App;
