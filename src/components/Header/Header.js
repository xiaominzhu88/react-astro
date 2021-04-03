import React from 'react';
import styles from './Header.module.scss';
import astro from '../../assets/images/astro.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className={styles.header}>
			<div className={styles.imgWrapper}>
				<Link to="/">
					<img src={astro} alt="astroLogo" className={styles.logo} />
				</Link>
			</div>
			<div />
		</div>
	);
};

export default Header;
