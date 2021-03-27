import React from 'react';
import styles from './Header.module.scss';
import astro from '../../assets/images/astro.jpg';

const Header = () => {
	return (
		<div className={styles.header}>
			<div classname={styles.imgWrapper}>
				<img src={astro} alt="astroLogo" className={styles.logo} />
			</div>
			<div />
		</div>
	);
};

export default Header;
