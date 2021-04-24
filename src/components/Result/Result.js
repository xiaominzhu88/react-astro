import React from 'react';
import styles from './Result.module.scss';

const Result = ({ data }) => {
	return (
		<div className={styles.result}>
			<ul className={styles.resultList}>
				<li>
					<span>🗓 </span>Aktuelles Datum: {data.current_date}
				</li>
				<li>
					<span>⚛️</span> Kompatibilität: {data.compatibility}
				</li>
				<li>
					<span>☘️ </span>Glückszahl: {data.lucky_number}{' '}
				</li>
				<li>
					<span>⏳</span> Glückszeit: {data.lucky_time}{' '}
				</li>
				<li>
					<span>🐠 </span>Farbe: {data.color}{' '}
				</li>
				<li>
					<span>🕔</span> Zeitraum: {data.date_range}{' '}
				</li>
				<li>
					<span>🌙 </span>Stimmung: {data.mood}{' '}
				</li>
				<li>
					<span>🌱 </span>Beschreibung: {data.description}{' '}
				</li>
			</ul>
		</div>
	);
};

export default Result;
