import React from 'react';
import emoji from 'react-easy-emoji';
import GitHubButton from 'react-github-btn';
import projects from '../../../data/projects';
import Chip from '../Chip';
import { isMobile } from 'react-device-detect';

export default function Projects() {
	return (
		<div className="secondary container">
			<div className="title">
				<h2>Projects {emoji('📚')}</h2>
			</div>
			<section className="projects">
				{projects.map((
					//TODO: fix colors for both modes
					{ icon, title, src, description, tags }
				) => (
					<div className="projectItem" key={title}>
						<div className="description">
							{emoji(icon)}
							<h4>{title}</h4>
							<h5>{description}</h5>
							<GitHubButton href={src}>source</GitHubButton>
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
