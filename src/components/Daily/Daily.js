import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './Daily.module.scss';
import axios from 'axios';
import CirclePulse from '../Animations/CirclePulse/CirclePulse';
import Separator from '../Separator/Separator';

const Daily = ({ handleSelectAstro, astro, astroOptions, className }) => {
	const [dailyData, setDailyData] = useState('');
	const [today, setToday] = useState('');

	useEffect(() => {
		const options = {
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
			<select
				onChange={(e) => handleSelectAstro(e)}
				className={classNames(className, 'select')}
			>
				select astro
				<option disabled={astro && true}>select astro</option>
				{astroOptions.map((item, i) => (
					<option key={`${i}_${item}`}>{item}</option>
				))}
			</select>
			<br />
			<br />
			{!dailyData ? (
				<div className={classNames(styles.circlePulse, 'circlePulse')}>
					<CirclePulse />
				</div>
			) : (
				<>
					<Separator />
					<br />
					<img src={dailyData.Icon} alt="daily" />
					<ul>
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