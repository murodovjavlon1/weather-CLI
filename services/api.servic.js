import axios from 'axios';
import { getKeyValue, TOKEN_DICTIONARY } from './storage.service.js';

const getWeather = async (city) => {
    const token = process.env.TOKEN ?? await getKeyValue(TOKEN_DICTIONARY.token);

    if (!token) {
        throw new Error('Token yo‘q. -t [API_KEY] orqali saqlang.');
    }
    //https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: city,
            appid: token,
            lang: 'en',
            units: 'metric'
        }
    })
    console.log(response)
    // return response

    //     const url = new URL('https://api.openweathermap.org/data/2.5/weather?q=Samarqand&appid=e10107dd87d4d35ea83832bc9476e679');
    //     // url.searchParams.append('q', city);
    //     // url.searchParams.append('appid', token);
    //     // url.searchParams.append('lang', 'en');
    //     // url.searchParams.append('units', 'metric');

    //     https.get(url, response => {
    //         let res = '';

    //         response.on('data', chunk => {
    //             res += chunk;
    //         });

    //         response.on('end', () => {
    //             console.log(res);
    //         });
    //     });
    // };
}

export { getWeather };
