import React from 'react';
import styles from './NavHeader.module.scss';
import { Link } from 'react-router-dom';

const NavHeader = () => {
	return (
		<>
			<Link to="/">
				<div className={styles.navHeader}>
					<div className={styles.navheaderContent}>
						<div className={styles.text}>🌗</div>
					</div>
				</div>
			</Link>
		</>
	);
};

export default NavHeader;
