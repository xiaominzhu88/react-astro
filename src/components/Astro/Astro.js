import React, { useState } from 'react';
import Result from '../Result/Result';
import styles from './Astro.module.scss';
import classNames from 'classnames';
import Heart from '../Animations/Heart/Heart';

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
	hasSelectButton,
	className,
}) => {
	const [astroErrorText, setAstroErrorText] = useState('');
	const [dayErrorText, setDayErrorText] = useState('');
	const [visible, setVisible] = useState(false);

	const validate = () => {
		if (!astro) {
			setAstroErrorText('Please select one astro');
			setVisible(true);
		} else if (!day) {
			setDayErrorText('Please select day');
			setVisible(true);
		} else if (astro && day) {
			setVisible(false);
		}
	};
	return (
		<div className={classNames(className, styles.astroWrapper)}>
			<form onSubmit={getData}>
				<select
					required
					onChange={(e) => handleSelectAstro(e)}
					className={classNames(
						className,
						{ [styles.selectButton]: hasSelectButton },
						'select',
					)}
				>
					select astro
					<option selected="selected" disabled={astro && true}>
						select astro
					</option>
					{astroOptions.map((item, i) => (
						<option key={`${i}_${item}`}>{item}</option>
					))}
				</select>
				{visible && <p className={styles.errorText}>{astroErrorText}</p>}
				<select
					required
					onChange={(e) => handleSelectDay(e)}
					className={classNames(
						className,
						{ [styles.selectButton]: hasSelectButton },
						'select',
					)}
				>
					<option disabled={day && true}>select day</option>
					{dayOptions.map((item, i) => (
						<option key={`${i}_${item}`}>{item}</option>
					))}
				</select>
				{visible && <p className={styles.errorText}>{dayErrorText}</p>}

				<button type="submit" onClick={validate}>
					GO
				</button>

				{loading ? <Heart /> : <Result data={data} />}
			</form>
		</div>
	);
};

export default Astro;
