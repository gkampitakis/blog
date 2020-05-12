import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../layout';
import UserInfo from '../components/UserInfo';
import PostTags from '../components/PostTags';
import SEO from '../components/SEO';
import config from '../../data/SiteConfig';

//TODO:work on designs here, verify all data are passed correctly
//TODO: review SEO and helmet

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
			<div>
				<Helmet>
					<title>{`${post.title} | ${config.siteTitle}`}</title>
				</Helmet>
				<SEO postPath={slug} postNode={postNode} postSEO />
				<div>
					<h1>{post.title}</h1>
					<div dangerouslySetInnerHTML={{ __html: postNode.html }} />
					<div className="post-meta">
						<PostTags tags={post.tags} />
					</div>
					<UserInfo config={config} />
				</div>
			</div>
		</Layout>
	);
};

/* eslint no-undef: "off" */
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
