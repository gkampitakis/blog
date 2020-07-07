import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../layout';
import avatar from '../images/avatar.jpg';
import PostTags from '../components/PostTags';
import SEO from '../components/SEO';
import config from '../../data/SiteConfig';
import Img from 'gatsby-image';

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
				{/* TODO:add image like a header or thumbnail */}
				<h1>{post.title}</h1>
				<span>{post.date}</span>
				<Img fixed={post.thumbnail.childImageSharp.fixed} />
				<div className="header">
					<img src={avatar} alt="Avatar" />
					<PostTags tags={post.tags} />
					{/* TODO: add share button and bookmark button */}
				</div>
				<div dangerouslySetInnerHTML={{ __html: postNode.html }} />
			</div>
		</Layout>
	);
};

export const pageQuery = graphql`
	query BlogPostBySlug($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
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
			}
		}
	}
`;
