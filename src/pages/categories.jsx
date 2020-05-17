import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout';

export default function CategoriesPage(props) {
	const { data } = props;
	console.log(data);

	return (
		<Layout>
			<div>Category Page</div>
		</Layout>
	);
}

export const pageQuery = graphql`
	query CategoryList {
		allMarkdownRemark(limit: 1000) {
			group(field: frontmatter___category) {
				fieldValue
				totalCount
			}
		}
	}
`;
