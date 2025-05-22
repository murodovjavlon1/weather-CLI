import https from 'https';
import { getKeyValu } from './storage.service';
const getWeather = async city => {
    // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
    const token = getKeyValu(TOKEN_DICTIONARY.token)
    if (!token) {
        throw new Error('Token yuq   -t [API_KEY]  => save API key')
    }
    const url = new URL('https://api.openweathermap.org/data/2.5/weather')
    url.searchParams.append('q', city)
    url.searchParams.append('appid', token)

}
export { getWeather }