import React from 'react';
import Link from '../Link/Link';
import classNames from 'classnames';
import styles from './MenuItem.module.scss';

const MenuItem = ({ link, name, className }) => {
	return (
		<div className={classNames(className, styles.menuItem)}>
			<Link to={link}>{name}</Link>
		</div>
	);
};

export default MenuItem;
