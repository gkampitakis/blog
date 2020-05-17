import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout';

export default function TagsPage(props) {
	const { data } = props;
	console.log(data);

	return (
		<Layout>
			<div>Tags Page</div>
		</Layout>
	);
}

export const pageQuery = graphql`
	query TagsList {
		allMarkdownRemark(limit: 1000) {
			group(field: frontmatter___tags) {
				fieldValue
				totalCount
			}
		}
	}
`;
