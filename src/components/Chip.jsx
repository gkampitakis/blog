import React from 'react';
import { Link } from 'gatsby';

export default (props) => {
	const { to, children, type } = props;

	return (
		<Link to={to} className={`chip ${type}`}>
			{children}
		</Link>
	);
};

//TODO: tag, popular, new
