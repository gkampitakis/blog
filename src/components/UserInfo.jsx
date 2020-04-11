import React from 'react';
import { Follow } from 'react-twitter-widgets';

export default (props) => {
	const { userTwitter } = props.config,
		{ expanded } = props;

	return <Follow username={userTwitter} options={{ count: expanded ? true : 'none' }} />;
};
