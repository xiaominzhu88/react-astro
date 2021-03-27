import React from 'react';
import Result from '../Result/Result';
import styles from './Astro.module.scss';
import classNames from 'classnames';
import Lottie from 'react-lottie';
import animationData from '../../assets/lottie.json';

const defaultOptions = {
	loop: true,
	autoplay: true,
	animationData: animationData,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice',
	},
};

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
			<select onChange={(e) => handleSelectAstro(e)} className={styles.select}>
				select astro
				<option disabled={astro && true}>select astro</option>
				{options.map((item) => (
					<option>{item}</option>
				))}
			</select>
			<select onChange={(e) => handleSelectDay(e)} className={styles.select}>
				<option disabled={day && true}>select day</option>
				<option>today</option>
				<option>yesterday</option>
				<option>tomorrow</option>
			</select>
			<button onClick={getData}>GO</button>

			{loading ? (
				<div className={styles.lottieImage}>
					<Lottie options={defaultOptions} height={400} width={'100%'} />
				</div>
			) : (
				<Result data={data} />
			)}
		</div>
	);
};

export default Astro;
