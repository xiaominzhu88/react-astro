import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './Daily.module.scss';
import CirclePulse from '../Animations/CirclePulse/CirclePulse';
import Separator from '../Separator/Separator';
import { useHistory } from 'react-router-dom';
import { getDailyData } from '../../hooks/ApiRequest.js';

const Daily = ({
	handleSelectAstro,
	astro,
	astroOptions,
	className,
	getData,
}) => {
	const [dailyData, setDailyData] = useState('');
	const [today, setToday] = useState('');
	const history = useHistory();
	const [query, setQuery] = useState('');
	const [verb, setVerb] = useState('were');

	useEffect(() => {
		const params = new URLSearchParams();
		if (query) {
			params.append('search', query);
		} else {
			params.delete('search');
		}
		history.push({ search: params.toString() });
	}, [history, query]);

	useEffect(() => {
		getDailyData(astro)
			.then((response) => {
				setDailyData(response.data[`${astro}`]);
				setToday(response.data.Date);
			})
			.catch((error) => {
				console.error(error);
			});
	}, [astro]);

	return (
		<div className={classNames(className, 'dataWrapper')}>
			<form onSubmit={getData}>
				<select
					onChange={(e) => {
						handleSelectAstro(e);
						setQuery(e.target.value);
						setVerb('are');
					}}
					className={classNames(className, 'select')}
				>
					<option default disabled={astro && true}>
						select astro
					</option>
					{astroOptions.map((item, i) => (
						<option key={`${i}_${item}`}>{item}</option>
					))}
				</select>
				<br />
				<br />
			</form>

			{!dailyData ? (
				<div className={classNames(styles.circlePulse, 'circlePulse')}>
					<CirclePulse />
				</div>
			) : (
				<>
					<Separator />
					<p>
						You {verb} looking for <b>{astro}</b>
					</p>
					<img src={dailyData.Icon} alt="daily" />
					<ul className={styles.resultList}>
						<br />
						<br />
						<li>
							🗓 <span>Today:</span> {today}
						</li>
						<br />

						<li>
							☘️ <span>Health:</span> {dailyData['Health']}
						</li>
						<br />
						<li>
							❤️ <span>Love:</span> {dailyData['Love']}
						</li>
						<br />
						<li>
							📂 <span>Career:</span> {dailyData['Career']}
						</li>
					</ul>
				</>
			)}
		</div>
	);
};

export default Daily;
