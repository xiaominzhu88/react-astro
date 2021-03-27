import React from 'react';
import classNames from 'classnames';
import styles from './About.module.scss';

const About = ({ className }) => {
	return <div className={classNames(className, styles.about)}>about page</div>;
};

export default About;
