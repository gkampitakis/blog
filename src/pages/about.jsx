import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../layout';
import About from '../components/About';
import config from '../../data/SiteConfig';

export default (props) => {
	return (
		<Layout>
			<div className="about-container">
				<Helmet title={`About | ${config.siteTitle}`} />
				<About />
			</div>
		</Layout>
	);
};
