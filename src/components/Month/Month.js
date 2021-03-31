import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './Month.module.scss';
import axios from 'axios';

const Month = ({ handleSelectAstro, astro, astroOptions, className }) => {
	const [monthData, setMonthData] = useState('');

	useEffect(() => {
		const options = {
			method: 'GET',
			url: `https://devbrewer-horoscope.p.rapidapi.com/month/short/${astro}`,
			headers: {
				'x-rapidapi-key': `${process.env.REACT_APP_KEY}`,
				'x-rapidapi-host': 'devbrewer-horoscope.p.rapidapi.com',
			},
		};
		axios
			.request(options)
			.then(function (response) {
				setMonthData(response.data[`${astro}`]);
			})
			.catch(function (error) {
				console.error(error);
			});
	}, [astro]);

	return (
		<div className={classNames(className, 'dataWrapper')}>
			<select onChange={(e) => handleSelectAstro(e)} className={styles.select}>
				select astro
				<option disabled={astro && true}>select astro</option>
				{astroOptions.map((item, i) => (
					<option key={`${i}_${item}`}>{item}</option>
				))}
			</select>
			<br />
			<br />
			{monthData && (
				<>
					<img src={monthData.Icon} alt="month" />
					<ul>
						<li>Best Days: {monthData['Best Days']}</li>
						<br />
						<li>{monthData['This Month']}</li>
						<br />
						<li>Worst Days: {monthData['Worst Days']}</li>
					</ul>
				</>
			)}
		</div>
	);
};

export default Month;
