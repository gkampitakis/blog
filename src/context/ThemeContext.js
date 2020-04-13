import React, { createContext, useEffect, useState } from 'react';

const defaultState = {
	dark: false,
	toggleDark: () => {}
};

const ThemeContext = createContext(defaultState);

function supportsDarkMode() {
	return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

const ThemeProvider = (props) => {
	const [darkState, setDarkState] = useState(false);

	useEffect(() => {
		const lsDark = JSON.parse(localStorage.getItem('dark'));

		console.log(lsDark, JSON.parse(localStorage.getItem('dark')));

		if (lsDark) {
			setDarkState(lsDark);
		} else if (supportsDarkMode()) {
			setDarkState(true);
		}
	}, [props]);

	const toggleDark = () => {
		const state = !darkState;

		setDarkState(state);
		localStorage.setItem('dark', JSON.stringify(state));
	};

	return <ThemeContext.Provider value={{ dark: darkState, toggleDark }}>{props.children}</ThemeContext.Provider>;
};

export default ThemeContext;

export { ThemeProvider };
