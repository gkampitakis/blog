import React from 'react';
import emoji from 'react-easy-emoji';
import Layout from '../layout';

export default (props) => {
	return (
		<Layout>
			<div>
				Hello World <span className="wave">{emoji('👋')}</span>
			</div>
		</Layout>
	);
};
