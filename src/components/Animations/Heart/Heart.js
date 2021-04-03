import React from 'react';
import styles from './Heart.module.scss';
import classNames from 'classnames';
export default function Heart() {
	return (
		<div className={styles.center}>
			<p className={styles.heart}>❤️</p>
			<p className={classNames(styles.heart, styles.heartOne)}>💛</p>
			<p className={classNames(styles.heart, styles.heartTwo)}>💙</p>
			<p className={classNames(styles.heart, styles.heartThree)}>💚</p>
		</div>
	);
}
