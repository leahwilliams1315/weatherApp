import axios from 'axios';

const API_KEY = 'b6e355332264b8dd7678ed6a9863b49f';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;



export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url= `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);


    return{
        type: FETCH_WEATHER,
        payload: request

    };
}