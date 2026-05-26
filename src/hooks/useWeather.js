import { useState } from "react";
import { getCurrentWeather, getForecast, getWeatherByLocation } from '../services/weatherApi.js';
  
/**
 * @param {string} url - адрес запроса
 * @param {object} [options] - дополнительные настройки fetch 
 * @returns {{ data: any, error: string | null, loading: boolean, refetch: Function }}
 */
export function useWeather() {

	const [weather, setWeather] = useState(null);
	const [forecast, setForecast] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	// const [error, setError] = useState(null);
	// const [loading, setLoading] = useState(false);


	const searchWeather = async (cityName) => {

		if (!cityName) return;

		setLoading(true);
		setError('');

		try {

			const weatherData = await getCurrentWeather(cityName);

			setWeather(weatherData);

			const forecastData = await getForecast(cityName);

			setForecast(forecastData);

			await fetch('http://localhost:3001/history', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					city: cityName
				})
			});

		} catch (err) {

			setError(err.message);
			setWeather(null);
			setForecast([]);

		} finally {

			setLoading(false);

		}
				
	};

	const getMyLocationWeather = async () => {

		setLoading(true);
		setError('');

		try {

			const weatherData = await getWeatherByLocation();

			setWeather(weatherData);

			const forecastData = await getForecast(weatherData.city);

			setForecast(forecastData);

			 await fetch('http://localhost:3001/history', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					city: weatherData.city
				})
			});

		} catch (err) {

			setError(err.message);

		} finally {

			setLoading(false);

		}
	};

//   useEffect(() => {

//      if(cityName) {
//       searchWeather();
//     }
//   }, [data]);

  return { weather, forecast,  error, loading, searchWeather, getMyLocationWeather };
}