import React from 'react';
import kebabCase from 'lodash.kebabcase';
import { Link } from 'gatsby';

export default (props) => {
	const { tags } = props;
	return (
		<div className="post-tag-container">
			{tags &&
				tags
					.filter((tag) => tag !== 'popular')
					.map((tag) => (
						<Link key={tag} style={{ textDecoration: 'none' }} to={`/tags/${kebabCase(tag)}`}>
							{tag}
						</Link>
					))}
		</div>
	);
};
