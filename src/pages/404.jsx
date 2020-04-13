import React from 'react';
import { Link } from 'gatsby';
import Layout from '../layout';
import notFoundLogo from '../images/404.png';

export default (props) => {
	return (
		<Layout>
			<div className="pageNotFound container">
				<div className="logo">
					<span className="statusCode">4</span>
					<img alt="Sorry about that" src={notFoundLogo} />
					<span className="statusCode">4</span>
				</div>
				<h2>OOPS! PAGE NOT FOUND</h2>
				<p className="description">
					Sorry but the page you are looking for does not exist, has been removed. name changed or is
					temporarily unavailable
				</p>
			</div>
		</Layout>
	);
};
