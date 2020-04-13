import React from 'react';
import avatar from '../images/avatar.png';
import twitter from '../images/twitter.png';
import gh from '../images/gh.png';
import ln from '../images/ln.png';

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
					<a href="https://www.instagram.com/g.kampitakis/" rel="noopener noreferrer" target="_blank">
						<img src={avatar} alt="Me" />
					</a>
				</div>
				<div className="socials">
					{socialLinks.map(({ url, image, label }) => {
						return (
							<div className="social" key={label}>
								<a href={url} rel="noopener noreferrer" target="_blank">
									<img src={images[image]} alt={label} />
								</a>
							</div>
						);
					})}
				</div>
			</div>
		</footer>
	);
};
