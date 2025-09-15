import axios from 'axios';

export const sendWeatherRequest = (city) => {
    return {
        type: 'SEND_WEATHER_REQUEST'
    }
}
export const sendWeatherSuccess = (data) => {
    return {
        type: 'SEND_WEATHER_SUCCESS',
        payload: data
    }
}
export const sendWeatherFailure = (error) => {
    return {
        type: 'SEND_WEATHER_FAILURE',
        payload: error
    }
}

const getWeatherInfo = (query)=>{
    return dispatch => {
        dispatch(sendWeatherRequest());
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=afd49aa8e1adbcc645858cf13ebcd27a
&units=metric`)
        .then(response => {
            const data = response.data;
            dispatch(sendWeatherSuccess(data));
        })
        .catch(error => {
            dispatch(sendWeatherFailure(error.message));
        });
        
    }
}