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
			content: '+4300000',
		},
		{
			icon: <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />,
			content: 'xxx@xxx',
		},
		{
			icon: <FontAwesomeIcon icon={faAddressBook} className={styles.icon} />,
			content: 'adress',
		},
	];
	return (
		<ul className={styles.contact}>
			<li>
				{contactItem.map((item) => (
					<section>
						{item.icon} {item.content}
					</section>
				))}
			</li>
		</ul>
	);
};

export default Contact;
