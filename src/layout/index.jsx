import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import config from '../../data/SiteConfig';
import '../styles/main.scss';
import ThemeContext from '../context/ThemeContext';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import favicon from '../images/favicon.png';
import { isMobile } from 'react-device-detect';

export default (props) => {
	const { children } = props,
		{ dark } = useContext(ThemeContext);

	console.log(config.consoleMessage); //TODO: remove

	return (
		<>
			<Helmet bodyAttributes={{ class: `theme ${dark ? 'dark' : 'light'}` }}>
				<meta name="description" content={config.siteDescription} />
				<link rel="shortcut icon" type="image/png" href={favicon} />
				<html lang="en" />
			</Helmet>
			<Navigation menuLinks={config.menuLinks} />
			<main id="main-content" className={`${isMobile ? 'bottomMargin' : ''}`}>
				{children}
			</main>
			<Footer config={config} />
		</>
	);
};
