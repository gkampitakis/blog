import React from 'react';
import { Helmet } from 'react-helmet';
import emoji from 'react-easy-emoji';
import Layout from '../layout';
import config from '../../data/SiteConfig';
import SEO from '../components/SEO';
import avatar from '../images/avatar.jpg';
import GitHubButton from 'react-github-btn';
import { Link, graphql } from 'gatsby';
import { isMobile } from 'react-device-detect';
import Chip from '../components/Chip';
import Img from 'gatsby-image';

export default (props) => {
	const { latest, popular } = props.data,
		github = config.socialLinks[0].url;

	let topPosts = popular.edges.map(({ node }) => node),
		latestPosts = latest.edges.map(({ node }) => node);


	if (isMobile) {
		topPosts = topPosts.slice(0, 4);
		latestPosts = latestPosts.slice(0, 4);
	}

	const setBookmark = (event, title) => {
		event.preventDefault();
		console.log('Mock Up bookmark');
	};

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
			{/* TODO: outsource this to a component and make it reusable */}
			<div className="main container">
				<h2>Top Posts {emoji('🏆')}</h2>
				<section className="topArticles">
					{topPosts.map(({ fields, frontmatter }) => (
						<Link key={frontmatter.title} to={fields.slug}>
							<Img fixed={frontmatter.thumbnail.childImageSharp.fixed} />
							<h3>{frontmatter.title}</h3>
						</Link>
					))}
				</section>
				<Chip to="/test" type="viewAll">
					View All
				</Chip>
			</div>
			<div className="secondary container">
				<div className="title">
					<h2>Latest Posts {emoji('📰')}</h2>
					<Chip to="/test" type="viewAll">
						View All
					</Chip>
				</div>
				<section className="latestPosts">
					{latestPosts.map(({ fields, frontmatter }) => (
						<Link key={frontmatter.title} to={fields.slug}>
							<div className="wrapper">
								<Img fixed={frontmatter.thumbnail.childImageSharp.fixed} />
								<h4>{frontmatter.title}</h4>
								<div
									className="bookmark"
									role="button"
									onClick={(e) => setBookmark(e, frontmatter.title)}
								>
									{emoji('🔖')}
								</div>
							</div>
						</Link>
					))}
				</section>
			</div>
			{/* TODO: personal projects section */}
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

//TODO: clear code
//Update readme file
//Clear css and scaffolding to be more clear
