const init = {
    loading: false,
    data: [],
    error: null
}


const WeatherReducer = (state=init, action) => {
    switch(action.type){
        case 'SEND_WEATHER_REQUEST':    
            return {
                ...state,
                loading: true
            }
        case 'SEND_WEATHER_SUCCESS':    
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: null
            }
        case 'SEND_WEATHER_FAILURE':    
            return {
                ...state,
                loading: false,
                data: [],
                error: action.payload
            }
        default:
            return state;
    }
}

export default WeatherReducer;