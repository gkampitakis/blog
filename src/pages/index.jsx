import React from 'react';
import { Helmet } from 'react-helmet';
import emoji from 'react-easy-emoji';
import Layout from '../layout';
import config from '../../data/SiteConfig';
import SEO from '../components/SEO';
import avatar from '../images/avatar.jpg';
import GitHubButton from 'react-github-btn';
import { graphql } from 'gatsby';
import { isMobile } from 'react-device-detect';
import LatestPosts from '../components/home/LatestPosts';
import TopPosts from '../components/home/TopPosts';
import ProjectsList from '../components/home/Projects';

export default (props) => {
	const { latest, popular } = props.data,
		github = config.socialLinks[0].url;

	let topPosts = popular.edges.map(({ node }) => node),
		latestPosts = latest.edges.map(({ node }) => node);

	if (isMobile) {
		topPosts = topPosts.slice(0, 4);
		latestPosts = latestPosts.slice(0, 4);
	}

	return (
		<Layout>
			<Helmet title={`${config.siteTitle} – Full Stack Software Developer`} />
			<SEO />
			<div className="homepage container">
				<div className="introduction">
					<div className="message">
						<h1>
							Hello World <span className="wave">{emoji('👋')}</span>, I am George
						</h1>
						<span>
							I am a fullstack developer based in London. I love coding and learning new things, so this
							is a portal for sharing what I find interesting. My current focus is on modern Javascript,
							Node.js, and development.
						</span>
					</div>
					<div className="avatar">
						<img src={avatar} alt="Avatar" />
						<GitHubButton href={github} data-size="large">
							gkampitakis
						</GitHubButton>
					</div>
				</div>
			</div>
			<TopPosts posts={topPosts} />
			<LatestPosts posts={latestPosts} />
			<ProjectsList />
		</Layout>
	);
};

export const pageQuery = graphql`
	query IndexQuery {
		latest: allMarkdownRemark(limit: 6, sort: { fields: [fields___date], order: DESC }) {
			edges {
				node {
					fields {
						slug
						date
					}
					excerpt
					frontmatter {
						title
						tags
						category
						thumbnail {
							childImageSharp {
								fluid(quality: 100) {
									...GatsbyImageSharpFluid
								}
							}
						}
						date
					}
				}
			}
		}
		popular: allMarkdownRemark(
			limit: 6
			sort: { fields: [fields___date], order: DESC }
			filter: { frontmatter: { tags: { in: "popular" } } }
		) {
			edges {
				node {
					fields {
						slug
						date
					}
					excerpt
					frontmatter {
						title
						tags
						category
						thumbnail {
							childImageSharp {
								fluid(quality: 100) {
									...GatsbyImageSharpFluid
								}
							}
						}
						date
					}
				}
			}
		}
	}
`;
