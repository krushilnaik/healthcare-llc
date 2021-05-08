import React, { Fragment, useState } from "react";
import Header from "../components/Header";

import "./scss/Home.scss";

function Home() {
	const [fullscreen, setFullscreen] = useState(false);

	return (
		<Fragment>
			<Header
				isVisible={!fullscreen}
				toggleHeaderFooter={() => {
					setFullscreen(!fullscreen);
				}}
			/>

			<main id='home'>
				<div>Home</div>
			</main>
		</Fragment>
	);
}

export default Home;
