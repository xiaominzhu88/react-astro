import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import axios from 'axios';
import Separator from '../Separator/Separator';
import Spinner from '../Animations/Spinner/Spinner';

const Week = ({ handleSelectAstro, astro, astroOptions, className }) => {
	const [weekData, setWeekData] = useState('');
	const [week, setWeek] = useState('');
	useEffect(() => {
		const options = {
			method: 'GET',
			url: `https://devbrewer-horoscope.p.rapidapi.com/week/short/${astro}`,
			headers: {
				'x-rapidapi-key': `${process.env.REACT_APP_KEY}`,
				'x-rapidapi-host': 'devbrewer-horoscope.p.rapidapi.com',
			},
		};
		axios
			.request(options)
			.then(function (response) {
				setWeekData(response.data[`${astro}`]);
				setWeek(response.data.Week);
			})
			.catch(function (error) {
				console.error(error.response.data);
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
			{!weekData ? (
				<Spinner />
			) : (
				<>
					<Separator />
					<br />
					<img src={weekData.Icon} alt="month" />
					<ul>
						<br />
						<li>
							📆 <span>Week: </span>
							{week}
						</li>

						<br />
						<li>
							{' '}
							📔 <span>This Week: </span>
							{weekData['This Week']}
						</li>
					</ul>
				</>
			)}
		</div>
	);
};

export default Week;
