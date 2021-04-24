import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import Separator from '../Separator/Separator';
import Heart from '../Animations/Heart/Heart';
import styles from './Month.module.scss';
import { useHistory } from 'react-router-dom';
import { getMonthData } from '../../hooks/ApiRequest.js';

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
		getMonthData(astro)
			.then((response) => setMonthData(response.data[`${astro}`]))
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
			{!monthData ? (
				<Heart />
			) : (
				<>
					<Separator />
					<p>
						You {verb} looking for <b>{astro}</b>
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
