import React from 'react';
import Result from '../Result/Result';
import styles from './Astro.module.scss';
import classNames from 'classnames';
import { Lottie } from '@crello/react-lottie';
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
	astroOptions,
	dayOptions,
	className,
}) => {
	return (
		<div className={classNames(className, styles.astroWrapper)}>
			<select onChange={(e) => handleSelectAstro(e)} className={styles.select}>
				select astro
				<option disabled={astro && true}>select astro</option>
				{astroOptions.map((item, i) => (
					<option key={`${i}_${item}`}>{item}</option>
				))}
			</select>
			<select onChange={(e) => handleSelectDay(e)} className={styles.select}>
				<option disabled={day && true}>select day</option>
				{dayOptions.map((item, i) => (
					<option key={`${i}_${item}`}>{item}</option>
				))}
			</select>
			<button onClick={getData}>GO</button>

			{loading ? (
				<div className={styles.lottieImage}>
					<Lottie config={defaultOptions} height={400} width={'100%'} />
				</div>
			) : (
				<Result data={data} />
			)}
		</div>
	);
};

export default Astro;
