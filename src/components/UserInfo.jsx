import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import GitHubButton from 'react-github-btn';
import { Follow } from 'react-twitter-widgets';

// TODO: this should be one contact page

export default (props) => {
	const { userTwitter } = props.config,
		github = props.config.socialLinks[0].url,
		{ dark } = useContext(ThemeContext);

	return (
		<>
			<Follow username={userTwitter} options={{ count: 'none' }} />
			{/* TODO: add font-weight here */}
			<GitHubButton data-color-scheme={`light: ${dark ? 'light' : 'dark'};`} href={github}>
				Follow @gkampitakis
			</GitHubButton>
		</>
	);
};
