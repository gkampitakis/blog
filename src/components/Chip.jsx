import React from 'react';
import { Link } from 'gatsby';

export default (props) => {
	const { to, children, type } = props;

	return to ? (
		<Link to={to} className={`chip ${type}`}>
			{children}
		</Link>
	) : (
		<div className={`chip ${type}`}>{children}</div>
	);
};

//TODO: tag, popular, new
