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
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
							been the industrys standard dummy text ever since the 1500s, when an unknown printer took a
							galley of type and scrambled it to make a type specimen book. It has survived not only five
							centuries, but also the leap into electronic typesetting
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
			<TopPosts posts={latestPosts} />
			<LatestPosts posts={topPosts} />
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
								fixed(width: 50, height: 50) {
									...GatsbyImageSharpFixed
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
								fixed(width: 60, height: 60) {
									...GatsbyImageSharpFixed
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

//Update readme file
// setup ghpages module
//Clear css and scaffolding to be more clear
