import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

export default (props) => {
	const { toggleDark } = useContext(ThemeContext);

	return (
		<div>
			<h1>Navigation Bar</h1>
			<button onClick={toggleDark}>Dark Theme Context</button>
		</div>
	);
};
