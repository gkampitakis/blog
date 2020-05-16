import React from 'react';
import avatar from '../images/avatar.png';
import twitter from '../images/twitter.png';
import gh from '../images/gh.png';
import ln from '../images/ln.png';
import ExternalLink from './ExternalLink';
import config from '../../data/SiteConfig';

export default (props) => {
	const { socialLinks } = props.config,
		images = {
			twitter,
			gh,
			ln
		};

	return (
		<footer className="footer">
			<div className="container">
				<div className="avatar">
					Created by:
					<ExternalLink href={config.instagram}>
						<img src={avatar} alt="Me" />
					</ExternalLink>
				</div>
				<div className="socials">
					{socialLinks.map(({ url, image, label }) => {
						return (
							<div className="social" key={label}>
								<ExternalLink href={url}>
									<img src={images[image]} alt={label} />
								</ExternalLink>
							</div>
						);
					})}
				</div>
			</div>
		</footer>
	);
};
