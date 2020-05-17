import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../layout';
import Contact from '../components/Contact';
import config from '../../data/SiteConfig';

export default (props) => {
	return (
		<Layout>
			<div className="about-container">
				<Helmet title={`About | ${config.siteTitle}`} />
				<Contact />
			</div>
		</Layout>
	);
};
