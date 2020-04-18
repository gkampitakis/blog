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
import js from '../images/js.png';
import Chip from '../components/Chip';
import Img from 'gatsby-image';

export default (props) => {
	let { topPosts, latestPosts } = props.data;
	const github = config.socialLinks[0].url;

	let topArticles = [
		{
			slug: '/',
			title: 'A big long title 1',
			thumbnail: 'js'
		},
		{ slug: '/', title: 'Publish to github registry 1111111111111111 dasdadasda', thumbnail: 'js' },
		{ slug: '/', title: 'Publish to github registry plus something', thumbnail: 'js' },
		{ slug: '/', title: 'Publish to github registry plus', thumbnail: 'js' },
		{ slug: '/', title: 'A big long title 5', thumbnail: 'js' },
		{ slug: '/', title: 'smaller title', thumbnail: 'js' }
	];

	if (isMobile) {
		topPosts = topPosts.slice(0, 4);
		latestPosts = latestPosts.slice(0, 4);
		topArticles = topArticles.slice(0, 4);
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
				<Img fixed={topPosts.edges[0].node.thumbnail.childImageSharp.fixed} />
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
					{topArticles.map(({ title, slug }) => (
						<Link key={title} to={slug}>
							<img src={js} alt="" />
							<h3>{title}</h3>
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
					{topArticles.map(({ title, slug }) => (
						<Link key={title} to={slug}>
							<div className="wrapper">
								<img src={js} alt="" />
								<h4>{title}</h4>
								<div className="bookmark" role="button" onClick={(e) => setBookmark(e, title)}>
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
		topPosts: allStrapiPost(
			limit: 6
			sort: { fields: [createdAt], order: DESC }
			filter: { tags: { in: "popular" } }
		) {
			edges {
				node {
					id
					thumbnail {
						childImageSharp {
							fixed(width: 200, height: 125) {
								...GatsbyImageSharpFixed
							}
						}
					}
					title
					content
					createdAt
				}
			}
		}
		latestPosts: allStrapiPost(
			limit: 6
			sort: { fields: [createdAt], order: DESC }
			filter: { tags: { in: "new" } }
		) {
			edges {
				node {
					id
					thumbnail {
						childImageSharp {
							fixed(width: 200, height: 125) {
								...GatsbyImageSharpFixed
							}
						}
					}
					title
					content
					createdAt
				}
			}
		}
	}
`;
// TODO: fix image sizes on queries
