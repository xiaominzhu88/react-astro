import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import Separator from '../Separator/Separator';
import Spinner from '../Animations/Spinner/Spinner';
import styles from './Week.module.scss';
import { useHistory } from 'react-router-dom';
import { getWeekData } from '../../hooks/ApiRequest.js';

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
		getWeekData(astro)
			.then((response) => {
				setWeekData(response.data[`${astro}`]);
				setWeek(response.data.Week);
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

			{!weekData ? (
				<Spinner />
			) : (
				<>
					<Separator />

					<p>
						You {verb} looking for <b>{astro}</b>
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
