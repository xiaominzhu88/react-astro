import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './Daily.module.scss';
import axios from 'axios';
import CirclePulse from '../Animations/CirclePulse/CirclePulse';
import Separator from '../Separator/Separator';
import { useHistory } from 'react-router-dom';

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
		const options = {
			credentials: 'include',
			method: 'GET',
			url: `https://devbrewer-horoscope.p.rapidapi.com/today/long/${astro}`,
			headers: {
				'x-rapidapi-key': `${process.env.REACT_APP_KEY}`,
				'x-rapidapi-host': 'devbrewer-horoscope.p.rapidapi.com',
			},
		};
		axios
			.request(options)
			.then(function (response) {
				setDailyData(response.data[`${astro}`]);
				setToday(response.data.Date);
			})
			.catch(function (error) {
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
					}}
					className={classNames(className, 'select')}
				>
					select astro
					<option selected="selected" disabled={astro && true}>
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
						You were looking for <b>{astro}</b>
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
