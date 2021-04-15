import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import axios from 'axios';
import Separator from '../Separator/Separator';
import Spinner from '../Animations/Spinner/Spinner';
import styles from './Week.module.scss';
import { useHistory } from 'react-router-dom';

const Week = ({
	handleSelectAstro,
	astro,
	astroOptions,
	className,
	getData,
}) => {
	const [weekData, setWeekData] = useState('');
	const [week, setWeek] = useState('');
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
	});
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
	}, [astro, query, history]);

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

			{!weekData ? (
				<Spinner />
			) : (
				<>
					<Separator />

					<p>
						You were looking for <b>{astro}</b>
					</p>

					<img src={weekData.Icon} alt="week" />
					<ul className={styles.resultList}>
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
