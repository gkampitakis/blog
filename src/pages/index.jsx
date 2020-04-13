import React from 'react';
import { Helmet } from 'react-helmet';
import emoji from 'react-easy-emoji';
import Layout from '../layout';
import config from '../../data/SiteConfig';
import SEO from '../components/SEO';
import avatar from '../images/avatar.jpg';
import GitHubButton from 'react-github-btn';

export default (props) => {
	const { data } = props,
		github = config.socialLinks[0].url;

	console.log(data);

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
						<GitHubButton href={github} data-size="large" data-show-count="true">
							gkampitakis
						</GitHubButton>
					</div>
				</div>
			</div>
		</Layout>
	);
};

// //TODO: Posts
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
