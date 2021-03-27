import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import classNames from 'classnames';
import styles from './Datepicker.module.scss';

const Datepicker = ({ startDate, setStartDate, className }) => {
	return (
		<div className={classNames(className, styles.datepickerWrapper)}>
			<DatePicker
				showTimeSelect
				selected={startDate}
				onChange={(date) => setStartDate(date)}
			/>
		</div>
	);
};

export default Datepicker;
