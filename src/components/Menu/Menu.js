import React from 'react';
import NavHeader from '../NavHeader/NavHeader';
import MenuItem from '../MenuItem/MenuItem';
import Contact from '../Contact/Contact';
import styles from './Menu.module.scss';

const Menu = ({ items }) => {
	return (
		<div className={styles.menu}>
			<NavHeader />
			<div className={styles.itemsWrapper}>
				<MenuItem link={'/astro'} />
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
