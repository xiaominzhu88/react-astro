import React from 'react';
import Link from '../Link/Link';
import classNames from 'classnames';
import styles from './MenuItem.module.scss';
import { useLocation } from 'react-router-dom';

const MenuItem = ({ link, name, className }) => {
	const location = useLocation();
	const currentName = location.pathname.toString().substring(1);

	return (
		<div
			className={classNames(
				className,
				{ [styles.current]: currentName === name },
				styles.menuItem,
			)}
		>
			<Link to={link}>{name}</Link>
		</div>
	);
};

export default MenuItem;
