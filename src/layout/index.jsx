import React, { useContext } from 'react';
import Helmet from 'react-helmet';
import config from '../../data/SiteConfig';
import '../styles/main.scss';
import ThemeContext from '../context/ThemeContext';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

export default (props) => {
	const { children } = props,
		{ dark } = useContext(ThemeContext);

	return (
		<>
			<Helmet bodyAttributes={{ class: `theme ${dark ? 'dark' : 'light'}` }}>
				<meta name="description" content={config.siteDescription} />
				<html lang="en" />
			</Helmet>
			<Navigation />
			{children}
			<Footer config={config} />
		</>
	);
};

//TODO: cslx
