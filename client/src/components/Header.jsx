import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

import "./scss/Header.scss";

/**
 *
 * @param {{
 * 	toggleHeaderFooter: React.MouseEventHandler<HTMLButtonElement>
 * 	isVisible: boolean
 * }} props
 * @returns
 */
function Header(props) {
	/**
	 * @type {React.CSSProperties}
	 */
	const visible = { transform: "translateY(0)", opacity: "100%" };

	/**
	 * @type {React.CSSProperties}
	 */
	const invisible = { transform: "translateY(-100%)", opacity: "0" };

	return (
		<Fragment>
			<header style={props.isVisible ? visible : invisible}>
				<nav>
					<ul>
						<li>
							<Link to='/sign_in'>Log out</Link>
						</li>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/settings'>Settings</Link>
						</li>
					</ul>
				</nav>
			</header>

			<button className={`toggle ${!props.isVisible ? "minimized" : ""}`} onClick={props.toggleHeaderFooter}>
				<FontAwesomeIcon icon={faCaretUp} />
			</button>
		</Fragment>
	);
}

export default Header;
