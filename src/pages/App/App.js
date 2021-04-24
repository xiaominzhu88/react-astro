import React, { useState } from 'react';
import Astro from '../../components/Astro/Astro';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import Video from '../../components/Video/Video';
import Month from '../../components/Month/Month';
import Week from '../../components/Week/Week';
import Daily from '../../components/Daily/Daily';
import Home from '../../components/Home/Home';
import About from '../../components/About/About';
import Others from '../../components/Others/Others';
import styles from './App.module.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import classNames from 'classnames';

const App = () => {
	const [day, setDay] = useState('');
	const [astro, setAstro] = useState('');

	const items = ['astro', 'month', 'week', 'daily', 'about', 'others'];
	const astroOptions = [
		`${astro}`,
		'Aries',
		'Taurus',
		'Gemini',
		'Cancer',
		'Leo',
		'Virgo',
		'Libra',
		'Scorpio',
		'Sagittarius',
		'Capricorn',
		'Aquarius',
		'Pisces',
	];
	const dayOptions = ['Today', 'Tomorrow', 'Yesterday'];

	const handleSelectDay = (e) => {
		setDay(e.target.value);
	};
	const handleSelectAstro = (e) => {
		setAstro(e.target.value);
	};

	// setting props
	const astroData = {
		handleSelectDay,
		handleSelectAstro,
		day,
		astro,
		astroOptions,
		dayOptions,
	};

	return (
		<Router>
			<div className={styles.App}>
				<Header items={items} />

				<div className={styles.main}>
					<Menu items={items} className={styles.resMenu} />
					<Switch>
						<Route exact path={'/'}>
							<Home className={classNames(styles.pageWrapper, 'page')} />
						</Route>
						<Route path={'/video'}>
							<Video className={classNames(styles.pageWrapper, 'page')} />
						</Route>

						<Route path={`/about`}>
							<About className={classNames(styles.pageWrapper, 'page')} />
						</Route>
						<Route path={`/astro`}>
							<Astro
								{...astroData}
								className={classNames(styles.astroWrapper, 'page')}
								hasSelectButton
							/>
						</Route>
						<Route path={`/month`}>
							<Month
								{...astroData}
								className={classNames(styles.monthWrapper, 'page')}
							/>
						</Route>
						<Route path={`/week`}>
							<Week
								{...astroData}
								className={classNames(styles.weekWrapper, 'page')}
							/>
						</Route>
						<Route path={`/daily`}>
							<Daily
								{...astroData}
								className={classNames(styles.dailyWrapper, 'page')}
							/>
						</Route>
						<Route path={`/others`}>
							<Others className={classNames(styles.pageWrapper, 'page')} />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
};

export default App;
