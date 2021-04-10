import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import axios from 'axios';
import Separator from '../Separator/Separator';
import Heart from '../Animations/Heart/Heart';
import styles from './Month.module.scss';

const Month = ({
	handleSelectAstro,
	astro,
	astroOptions,
	className,
	getData,
}) => {
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
				console.error(error.response.data);
			});
	}, [astro]);

	return (
		<div className={classNames(className, 'dataWrapper')}>
			<form onSubmit={getData}>
				<select
					onChange={(e) => handleSelectAstro(e)}
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
				{!monthData ? (
					<Heart />
				) : (
					<>
						<Separator />
						<p>
							You are searching for <b>{astro}</b>
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
			</form>
		</div>
	);
};

export default Month;
