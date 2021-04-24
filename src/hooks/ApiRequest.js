import axios from 'axios';

const getAstroData = (astro, day) => {
	const options = {
		method: 'POST',
		url: `https://aztro.sameerkumar.website/?sign=${astro}&day=${day}`,
		headers: {
			'x-rapidapi-key': `${process.env.REACT_APP_KEY}`,
			'x-rapidapi-host': 'sameer-kumar-aztro-v1.p.rapidapi.com',
		},
	};
	return axios.request(options);
};

const getMonthData = (astro) => {
	const options = {
		credentials: 'include',
		method: 'GET',
		url: `https://devbrewer-horoscope.p.rapidapi.com/month/short/${astro}`,
		headers: {
			'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE',
			'x-rapidapi-key': `${process.env.REACT_APP_KEY}`,
			'x-rapidapi-host': 'devbrewer-horoscope.p.rapidapi.com',
			'Access-Control-Allow-Credentials': true,
		},
	};
	return axios.request(options);
};

const getWeekData = (astro) => {
	const options = {
		credentials: 'include',
		method: 'GET',
		url: `https://devbrewer-horoscope.p.rapidapi.com/week/short/${astro}`,
		headers: {
			'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE',
			'x-rapidapi-key': `${process.env.REACT_APP_KEY}`,
			'x-rapidapi-host': 'devbrewer-horoscope.p.rapidapi.com',
			'Access-Control-Allow-Credentials': true,
		},
	};
	return axios.request(options);
};
const getDailyData = (astro) => {
	const options = {
		credentials: 'include',
		method: 'GET',
		url: `https://devbrewer-horoscope.p.rapidapi.com/today/long/${astro}`,
		headers: {
			'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE',
			'x-rapidapi-key': `${process.env.REACT_APP_KEY}`,
			'x-rapidapi-host': 'devbrewer-horoscope.p.rapidapi.com',
			'Access-Control-Allow-Credentials': true,
		},
	};
	return axios.request(options);
};

export { getAstroData, getMonthData, getWeekData, getDailyData };
