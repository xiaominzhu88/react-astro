import React from 'react';
import styles from './Home.module.scss';
import classNames from 'classnames';

const Home = ({ className }) => {
	return (
		<div className={classNames(className, styles.pageWrapper)}>
			<div className={styles.homePage}>
				<p>home page</p>
			</div>
		</div>
	);
};

export default Home;
