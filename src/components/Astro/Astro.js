import React from 'react';
import Result from '../Result/Result';
import { useMenuState, Menu, MenuItem, MenuButton } from 'reakit/Menu';
import styles from './Astro.module.scss';
import classNames from 'classnames';

const Astro = ({
	loading,
	handleSelectAstro,
	handleSelectDay,
	data,
	getData,
	day,
	astro,
	className,
}) => {
	const options = [
		'aries',
		'taurus',
		'gemini',
		'cancer',
		'leo',
		'virgo',
		'libra',
		'scorpio',
		'sagittarius',
		'capricorn',
		'aquarius',
		'pisces',
	];
	return (
		<div className={classNames(className, styles.astroWrapper)}>
			<select onChange={(e) => handleSelectAstro(e)}>
				select astro
				<option disabled={astro && true}>select astro</option>
				{options.map((item) => (
					<option>{item}</option>
				))}
			</select>
			<select onChange={(e) => handleSelectDay(e)}>
				<option disabled={day && true}>select day</option>
				<option>today</option>
				<option>yesterday</option>
				<option>tomorrow</option>
			</select>
			<button onClick={getData}>GO</button>

			{!loading && <Result data={data} />}
		</div>
	);
};

export default Astro;
