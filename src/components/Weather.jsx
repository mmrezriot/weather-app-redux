import React, { useState } from 'react';
import PersianDate from './PersianDate.jsx';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import getWeatherInfo from '../redux/weather/weatherActions.js';

const Weather = () => {
    const [backMode , setBackMode] = useState('cold')
    const [query , setQuery] = useState('')
    const {loading , data , error} = useSelector(state => state)
    const dispatch = useDispatch();

    

   
const handleSubmit = (e) => {
   e.preventDefault();
   dispatch(getWeatherInfo(query)); // فقط dispatch


};

    return (
        <div className={`app pt-4 container-fluid back_${backMode}`}>

            <div className='row justify-content-center py-3 pt-4'>
                <div className='col-10 col-md-6 col-lg-4 col-xl-3'>
                    <form onSubmit={handleSubmit}>
                        <input type="text" 
                        className='search_input w-100 text_color placeholder_color' 
                        placeholder={'نام شهر یا کشور'}
                        onChange={(e) => setQuery(e.target.value)}
                        value={query}
                        />
                    </form>
                </div>
            </div>

            <div className='row justify-content-center py-3 pt-4'>
                <div className='col-11 col-md-8 col-lg-4 col-xl-3'>
                    <h3 className='text-center text_color'>
                        <PersianDate/>
                    </h3>
                </div>
            </div>

            {loading ? (
                <div className='row justify-content-center py-3 pt-4'>
                    <div className='col-11 col-md-8 col-lg-4 col-xl-3'>
                        <h3 className='text-center text_color'>در حال بارگذاری...</h3>
                    </div>
                </div>
            ) : data.main ? (
                <>
                <div className='row justify-content-center py-3'>
                <div className='col-9 col-md-6 col-lg-4 col-xl-3'>
                    <div className='temprature_box pt-3'>
                        <span>{Math.round(data.main.temp)}</span> °C
                    </div>
                </div>
            </div>

            <div className='row justify-content-center py-3 pt-4'>
                <div className='col-11 col-md-8 col-lg-4 col-xl-3'>
                    <h1 className='text-center fa-3x lathin_text text_color'>cloudy</h1>
                </div>
            </div>
</>
            ) : error ? (
                <div className='row justify-content-center py-3 pt-4'>
                    <div className='col-11 col-md-8 col-lg-4 col-xl-3'>
                        <h3 className='text-center text_color'>خطا در دریافت اطلاعات</h3>
                    </div>
                </div>  
            ) : null}



        </div>
    );
}

export default Weather;