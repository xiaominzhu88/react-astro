import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import axios from 'axios';
import Separator from '../Separator/Separator';
import Heart from '../Animations/Heart/Heart';
import styles from './Month.module.scss';
import { useHistory } from 'react-router-dom';

const Month = ({
	handleSelectAstro,
	astro,
	astroOptions,
	className,
	getData,
}) => {
	const history = useHistory();
	const [query, setQuery] = useState('');
	const [monthData, setMonthData] = useState('');

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
			url: `https://devbrewer-horoscope.p.rapidapi.com/month/short/${astro}`,
			headers: {
				'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE',
				'x-rapidapi-key': `${process.env.REACT_APP_KEY}`,
				'x-rapidapi-host': 'devbrewer-horoscope.p.rapidapi.com',
				'Access-Control-Allow-Credentials': true,
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
			<form onSubmit={getData}>
				<select
					onChange={(e) => {
						handleSelectAstro(e);
						setQuery(e.target.value);
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
			{!monthData ? (
				<Heart />
			) : (
				<>
					<Separator />
					<p>
						You were looking for <b>{astro}</b>
					</p>

					<img src={monthData.Icon} alt="month" />
					<ul className={styles.resultList}>
						<li>
							🌟<span> Best Days:</span> {monthData['Best Days']}
						</li>
						<br />
						<li>
							🗓<span> This Month: </span>
							{monthData['This Month']}
						</li>
						<br />
						<li>
							🎩<span> Worst Days:</span> {monthData['Worst Days']}
						</li>
					</ul>
				</>
			)}
		</div>
	);
};

export default Month;
