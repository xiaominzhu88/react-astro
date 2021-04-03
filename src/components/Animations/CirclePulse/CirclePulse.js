import React from 'react';
import styles from './CirclePulse.module.scss';
import classNames from 'classnames';
export default function CirclePulse() {
	return (
		<div className={styles.center}>
			<div
				className={classNames(styles.circle, styles.pulse, styles.orange)}
			></div>
			<div
				className={classNames(styles.circle, styles.pulse, styles.green)}
			></div>
			<div
				className={classNames(styles.circle, styles.pulse, styles.blue)}
			></div>
			<div
				className={classNames(styles.circle, styles.pulse, styles.hotpink)}
			></div>
		</div>
	);
}
