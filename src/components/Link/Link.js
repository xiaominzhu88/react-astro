import React from 'react';
import { Link as ReactLink } from 'react-router-dom';

const Link = ({ children, to, ...props }) => {
	return (
		<ReactLink to={to} {...props}>
			{children}
		</ReactLink>
	);
};
export default Link;
