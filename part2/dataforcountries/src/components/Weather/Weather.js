import React, { useState } from 'react';
import PropTypes from 'prop-types';


const Weather = ({weatherData}) => (
    <>
    {weatherData && (
      <div>
        <h4>Weather in {weatherData.name}</h4>
        <div>
          <span>Temperature: </span>
          <span>{weatherData.main.temp} Celsius</span>
        </div>
        <div>
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          />
        </div>
        <div>
          <span>Wind: </span>
          <span>{weatherData.wind.speed} m/s </span>
        </div>
      </div>
    )}
  </>
)
   

export default Weather;