import React, { useState } from 'react';
import styles from './Header.module.scss';
import astro from '../../assets/images/astro.jpg';
import { Link } from 'react-router-dom';
import Hamburger from '../Hamburger/Hamburger';
import X from '../Hamburger/X';
import Menu from '../Menu/Menu';
import classNames from 'classnames';

const Header = ({ items }) => {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	return (
		<div className={styles.header}>
			<div className={styles.imgWrapper}>
				<Link to="/">
					<img src={astro} alt="astroLogo" className={styles.logo} />
				</Link>
			</div>

			<div className={styles.logoNav}>
				{click && (
					<Menu
						items={items}
						className={classNames(
							{ [styles.navOptionsInActive]: !click },
							{ [styles.navOptions]: click },
						)}
						closeMobileMenu={closeMobileMenu}
					/>
				)}
			</div>

			<div className={styles.mobileMenu} onClick={handleClick}>
				{click ? (
					<X className={styles.menuIcon} />
				) : (
					<Hamburger className={styles.menuIcon} />
				)}
			</div>
		</div>
	);
};

export default Header;
