import React from 'react';
import emoji from 'react-easy-emoji';
import GitHubButton from 'react-github-btn';
import projects from '../../../data/projects';
import Chip from '../Chip';
import { isMobile } from 'react-device-detect';
import ExternalLink from '../ExternalLink';

export default function Projects(props) {
	const { theme } = props;

	return (
		<div className="secondary container">
			<div className="title">
				<h2>Projects {emoji('📚')}</h2>
			</div>
			<section className="projects">
				{projects.map(({ icon, title, src, description, tags }) => (
					<div className="projectItem" key={title}>
						<div className="description">
							<ExternalLink href={src}>
								{emoji(icon)}
								<h4>{title}</h4>
							</ExternalLink>

							<h5>{description}</h5>
							<GitHubButton data-color-scheme={`light: ${theme ? 'light' : 'dark'};`} href={src}>
								source
							</GitHubButton>
						</div>
						<div className="tagList">
							{tags.map((tag) => <Chip type="tag">{tag}</Chip>).slice(0, isMobile ? 3 : 10)}
						</div>
					</div>
				))}
			</section>
		</div>
	);
}
