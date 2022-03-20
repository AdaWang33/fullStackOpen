import React from 'react';
import Weather from '../Weather/Weather';
import { useState, useEffect } from 'react';
import axios from 'axios'
import PropTypes from 'prop-types';

const SingleCountry = ({country, weatherData}) => 
{
    return(
    <div>
        <h3> {country.name.common} </h3>
        <div>
            <p>captical {country.capital[0]}</p>
            <p>area {country.area}</p>
        </div>
        <h4>languages: </h4>
        <div>
            <p>{Object.values(country.languages)}</p>
        </div>
        <div>{country.flag}</div>
        <>
        {weatherData && (<Weather weatherData={weatherData}/>)}
        </>
    </div>
)};

export default SingleCountry;