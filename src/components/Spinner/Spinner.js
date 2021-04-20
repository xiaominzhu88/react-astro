import React from 'react';
import styles from './Spinner.module.scss';
import classNames from 'classnames';

const Spinner = () => {
	return (
		<div className={classNames(styles.Spinner, styles.SpinnerDotsScale)}>
			<div className={styles.spinner_dot} />
			<div className={styles.spinner_dot} />
			<div className={styles.spinner_dot} />
		</div>
	);
};

export default Spinner;
