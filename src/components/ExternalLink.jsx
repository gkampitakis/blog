import React from 'react';

export default function ExternalLink(props) {
	const { children, href } = props;

	return (
		<a href={href} rel="noopener noreferrer" target="_blank">
			{children}
		</a>
	);
}
