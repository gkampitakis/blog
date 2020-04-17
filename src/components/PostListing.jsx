import React from 'react';
import { Link } from 'gatsby';

export default (props) => {
	const getPostList = () => {
		const postList = [];
		props.postEdges.forEach((postEdge) => {
			//TODO: we need to find what articles we need
			postList.push({
				path: postEdge.node.fields.slug,
				tags: postEdge.node.frontmatter.tags,
				// cover: postEdge.node.frontmatter.cover,
				title: postEdge.node.frontmatter.title,
				date: postEdge.node.fields.date,
				excerpt: postEdge.node.excerpt,
				timeToRead: postEdge.node.timeToRead
			});
		});
		return postList;
	};

	return (
		<div>
			{
				/* Your post list here. */
				getPostList().map((post) => (
					<Link to={post.path} key={post.title}>
						<h1>{post.title}</h1>
					</Link>
				))
			}
		</div>
	);
};
