import React from 'react';
import NavHeader from '../NavHeader/NavHeader';
import MenuItem from '../MenuItem/MenuItem';
import Contact from '../Contact/Contact';
import styles from './Menu.module.scss';
import classNames from 'classnames';

const Menu = ({ items, className, closeMobileMenu }) => {
	return (
		<div
			className={classNames(className, styles.menu)}
			onClick={closeMobileMenu}
		>
			<NavHeader />
			<div className={styles.itemsWrapper}>
				{items.map((item, i) => (
					<MenuItem
						name={item}
						link={item ? `/${item}` : '/'}
						className={styles.menuItems}
						key={`${i}_${item}`}
					/>
				))}
			</div>
			<Contact />
		</div>
	);
};

export default Menu;
