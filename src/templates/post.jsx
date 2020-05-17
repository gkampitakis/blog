import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../layout';
import UserInfo from '../components/UserInfo';
import PostTags from '../components/PostTags';
import SEO from '../components/SEO';
import config from '../../data/SiteConfig';

export default (props) => {
	const { data, pageContext } = props,
		{ slug } = pageContext,
		postNode = data.markdownRemark,
		post = postNode.frontmatter;

	if (!post.id) {
		post.id = slug;
	}

	return (
		<Layout>
			<div className="post">
				<Helmet>
					<title>{`${post.title} | ${config.siteTitle}`}</title>
				</Helmet>
				<SEO postPath={slug} postNode={postNode} postSEO />
				<div className="header">
					{/* TODO:add image like a header or thumbnail */}
					<h1>{post.title}</h1>
					<div className="post-meta">
						<PostTags tags={post.tags} />
					</div>
					<UserInfo config={config} />
					{/* TODO: add follow  on github */}
					<div dangerouslySetInnerHTML={{ __html: postNode.html }} />
				</div>
			</div>
		</Layout>
	);
};

export const pageQuery = graphql`
	query BlogPostBySlug($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			timeToRead
			excerpt
			frontmatter {
				title
				thumbnail {
					childImageSharp {
						fixed(width: 150, height: 150) {
							...GatsbyImageSharpFixed
						}
					}
				}
				date
				category
				tags
			}
			fields {
				slug
				date
			}
		}
	}
`;
