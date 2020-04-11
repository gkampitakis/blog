import React from 'react';
import Helmet from 'react-helmet';
import config from '../../data/SiteConfig';
import '../styles/main.scss';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

export default (props) => {
	const { children } = props;

	return (
		<>
			<Helmet>
				<meta name="description" content={config.siteDescription} />
				<html lang="en" />
			</Helmet>
			<Navigation />
			{children}
			<Footer config={config} />
		</>
	);
};
