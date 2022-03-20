import React from 'react';
import Button from '../Button/Button'
import PropTypes from 'prop-types';
import SingleCountry from '../SingleCountry/SingleCountry';
import { useState, useEffect } from 'react'
import axios from 'axios'


const CountryInfo = ({filteredCountries, weatherData}) => {
    if (filteredCountries.length > 10 ) {
        return (<p>Too many matches, speficy another filter</p>)
    }

    if (filteredCountries.length==1) {
        return (<SingleCountry country ={filteredCountries[0]} weatherData={weatherData}/>)
    }
    return (
        <div>
            {filteredCountries.map(country=>(
                <div key={country.name.common}>{country.name.common}<Button country={country}/></div>
            ))}
        </div>
    )
    return (<div></div>)
};

export default CountryInfo;