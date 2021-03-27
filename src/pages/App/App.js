import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import Astro from '../../components/Astro/Astro';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import Datepicker from '../../components/Datepicker/Datepicker';
import Home from '../../components/Home/Home';
import About from '../../components/About/About';
import Others from '../../components/Others/Others';

import styles from './App.module.scss';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import classNames from 'classnames';

const App = () => {
	const [startDate, setStartDate] = useState(new Date());
	const [data, setData] = useState({});
	const [day, setDay] = useState('');
	const [astro, setAstro] = useState('');
	const [loading, setLoading] = useState(true);

	const items = ['astro', 'datepicker', 'about', 'others'];

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
			'x-rapidapi-key': '9b2ac43a03msh6d8c651bd763f66p182710jsn29b9b957d540',
			'x-rapidapi-host': 'sameer-kumar-aztro-v1.p.rapidapi.com',
		},
	};

	const getData = () => {
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

	return (
		<Router>
			<div className="App">
				<Header />

				<div className={styles.main}>
					<Menu items={items} />
					<Switch>
						<Route exact path={'/'}>
							<Home className={classNames(styles.pageWrapper, 'page')} />
						</Route>

						<Route path={`/about`}>
							<About className={classNames(styles.pageWrapper, 'page')} />
						</Route>
						<Route path={`/others`}>
							<Others className={classNames(styles.pageWrapper, 'page')} />
						</Route>
						<Route path={`/astro`}>
							<Astro
								loading={loading}
								handleSelectDay={handleSelectDay}
								handleSelectAstro={handleSelectAstro}
								data={data}
								getData={getData}
								day={day}
								astro={astro}
								className={classNames(styles.pageWrapper, 'page')}
							/>
						</Route>
						<Route path={`/datepicker`}>
							<Datepicker
								showTimeSelect
								selected={startDate}
								onChange={(date) => setStartDate(date)}
								startDate={startDate}
								setStartDate={setStartDate}
								className={classNames(styles.pageWrapper, 'page')}
							/>
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
};

export default App;
