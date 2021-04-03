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
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import classNames from 'classnames';

const App = () => {
	const [data, setData] = useState({});
	const [day, setDay] = useState('');
	const [astro, setAstro] = useState('');
	const [loading, setLoading] = useState(true);

	const items = ['astro', 'month', 'week', 'daily', 'about', 'others'];
	const astroOptions = [
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

	const options = {
		method: 'POST',
		url: `https://aztro.sameerkumar.website/?sign=${astro}&day=${day}`,
		headers: {
			'x-rapidapi-key': `${process.env.REACT_APP_KEY}`,
			'x-rapidapi-host': 'sameer-kumar-aztro-v1.p.rapidapi.com',
		},
	};

	const getData = (e) => {
		e.preventDefault();

		axios
			.request(options)
			.then(function (response) {
				setData(response.data);
			})
			.catch(function (error) {
				console.error(error);
			});
		setLoading(false);
	};

	const astroData = {
		loading,
		handleSelectDay,
		handleSelectAstro,
		data,
		getData,
		day,
		astro,
		astroOptions,
		dayOptions,
	};
	return (
		<Router>
			<div className={styles.App}>
				<Header />

				<div className={styles.main}>
					<Menu items={items} />
					<Switch>
						<Route exact path={'/'}>
							<Home className={classNames(styles.pageWrapper, 'page')} />
						</Route>
						<Route exact path={'/video'}>
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
