import React, { useState } from "react";

import "./scss/SignIn.scss";

function SignIn() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	/**
	 * @param {React.SyntheticEvent<HTMLButtonElement>} event
	 */
	const handleFormSubmit = (event) => {
		event.preventDefault();

		// attempt to log the user in
	};

	return (
		<main id='sign-in'>
			<form action='POST'>
				<h1>Sign in</h1>

				<div className='input-wrapper'>
					<input
						type='text'
						name='username'
						id='username'
						defaultValue={username}
						onChange={(event) => {
							setUsername(event.currentTarget.value);
						}}
						placeholder='Username:'
					/>
				</div>

				<div className='input-wrapper'>
					<input
						type='password'
						name='password'
						id='password'
						defaultValue={password}
						onChange={(event) => {
							setPassword(event.currentTarget.value);
						}}
						placeholder='Password:'
					/>
				</div>
				<button type='submit' onClick={handleFormSubmit}>
					Sign in
				</button>
			</form>
		</main>
	);
}

export default SignIn;
