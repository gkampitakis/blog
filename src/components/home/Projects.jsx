import React from 'react';
import emoji from 'react-easy-emoji';
import GitHubButton from 'react-github-btn';
import projects from '../../../data/projects';

export default function Projects() {
	return (
		<div className="secondary container">
			<div className="title">
				<h2>Projects {emoji('📚')}</h2>
			</div>
			<section>
				{projects.map(({ icon, title, src, description, tags }) => (
					<div className="projectItem" key={title}>
						{emoji(icon)}
						<h4>{title}</h4>
						<h4>{description}</h4>
						<GitHubButton href={src}>source</GitHubButton>
						{tags.map((tag) => (
							<span>{tag}</span>
						))}
					</div>
				))}
			</section>
		</div>
	);
}
