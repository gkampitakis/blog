import React from 'react';
import Chip from '../Chip';
import emoji from 'react-easy-emoji';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

export default function LatestPosts(props) {
	const { posts } = props;

	const setBookmark = (event, title) => {
		event.preventDefault();
		console.log('Mock Up bookmark'); //TODO: implement
	};

	return (
		<div className="secondary container">
			<div className="title">
				<h2>Latest Posts {emoji('📰')}</h2>
				<Chip to="/test" type="viewAll">
					View All
				</Chip>
			</div>
			<section className="latestPosts">
				{posts.map(({ fields, frontmatter }) => (
					<Link key={frontmatter.title} to="/404">
						<div className="wrapper">
							<Img fluid={frontmatter.thumbnail.childImageSharp.fluid} />
							<h4>{frontmatter.title}</h4>
							<div className="bookmark" role="button" onClick={(e) => setBookmark(e, frontmatter.title)}>
								{emoji('🔖')}
							</div>
						</div>
					</Link>
				))}
			</section>
		</div>
	);
}
