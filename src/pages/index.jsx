import React from 'react';
import { Helmet } from 'react-helmet';
import emoji from 'react-easy-emoji';
import Layout from '../layout';
import config from '../../data/SiteConfig';
import SEO from '../components/SEO';
import avatar from '../images/avatar.jpg';
import GitHubButton from 'react-github-btn';
import { Link } from 'gatsby';
import { isMobile } from 'react-device-detect';
import js from '../images/js.png';
import Chip from '../components/Chip';

export default (props) => {
	const { data } = props,
		github = config.socialLinks[0].url;

	console.log(data);

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

	if (isMobile) topArticles = topArticles.slice(0, 4); //dev

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

// //TODO: Posts and use different limiter
// export const pageQuery = graphql`
// 	query IndexQuery {
// 		latest: allMarkdownRemark(limit: 5, sort: { fields: [fields___date], order: DESC }) {
// 			edges {
// 				node {
// 					fields {
// 						slug
// 						date
// 					}
// 					excerpt
// 					timeToRead
// 					frontmatter {
// 						title
// 						tags
// 						categories
// 						# thumbnail {
// 						# 	childImageSharp {
// 						# 		fixed(width: 150, height: 150) {
// 						# 			...GatsbyImageSharpFixed
// 						# 		}
// 						# 	}
// 						# }
// 						date
// 					}
// 				}
// 			}
// 		}
// 		popular: allMarkdownRemark(
// 			limit: 9
// 			sort: { fields: [fields___date], order: DESC }
// 			filter: { frontmatter: { categories: { eq: "Popular" } } }
// 		) {
// 			edges {
// 				node {
// 					fields {
// 						slug
// 						date
// 					}
// 					excerpt
// 					timeToRead
// 					frontmatter {
// 						title
// 						tags
// 						categories
// 						# thumbnail {
// 						# 	childImageSharp {
// 						# 		fixed(width: 150, height: 150) {
// 						# 			...GatsbyImageSharpFixed
// 						# 		}
// 						# 	}
// 						# }
// 						date
// 					}
// 				}
// 			}
// 		}
// 	}
// `;
