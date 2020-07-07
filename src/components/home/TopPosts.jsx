import React from 'react';
import Chip from '../Chip';
import emoji from 'react-easy-emoji';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

export default function TopPosts(props) {
	const { posts } = props;

	return (
		<div className="main container">
			<h2>Top Posts {emoji('🏆')}</h2>
			<section className="topArticles">
				{posts.map(({ fields, frontmatter }) => (
					<Link key={frontmatter.title} to="/404">
						<Img fluid={frontmatter.thumbnail.childImageSharp.fluid} />
						<h3>{frontmatter.title}</h3>
					</Link>
				))}
			</section>
			<Chip to="/test" type="viewAll">
				View All
			</Chip>
		</div>
	);
}
