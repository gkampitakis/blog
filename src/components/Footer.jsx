import React from 'react';
import { Link } from 'gatsby';

//TODO: css
//TODO: props type

export default (props) => {
	const { config } = props,
		url = config.siteRss,
		{ copyright } = config;

	if (!copyright) {
		return null;
	}

	return (
		<footer className="footer">
			<div className="notice-container">
				<h4>{copyright}</h4>
				<h4>Footer Page</h4>
			</div>
		</footer>
	);
};
