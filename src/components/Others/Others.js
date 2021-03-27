import React from 'react';
import styles from './Others.module.scss';
import classNames from 'classnames';

const Others = ({ className }) => {
	return (
		<div className={classNames(className, styles.others)}>
			<div className={styles.others}>
				<p>other page</p>
			</div>
		</div>
	);
};

export default Others;
