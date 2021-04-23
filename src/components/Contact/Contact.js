import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faPhone,
	faEnvelope,
	faAddressBook,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Contact.module.scss';

const Contact = () => {
	const contactItem = [
		{
			icon: <FontAwesomeIcon icon={faPhone} className={styles.icon} />,
			content: '+4300000000',
		},
		{
			icon: <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />,
			content: 'demo@demo.com',
		},
		{
			icon: <FontAwesomeIcon icon={faAddressBook} className={styles.icon} />,
			content: 'Adresse',
		},
	];
	return (
		<ul className={styles.contact}>
			<li>
				{contactItem.map((item, i) => (
					<section key={`${i}_${item.content}`}>
						{item.icon} {item.content}
					</section>
				))}
			</li>
		</ul>
	);
};

export default Contact;
