import { useState, useEffect } from 'react'
import axios from 'axios'
import logo from './logo.svg';
import './App.css';
import CountryInfo from './components/CountryInfo/CountryInfo'

const App = () => {
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [key, setKey] = useState('')
  const [weatherData, setWeatherData] = useState(null);

  useEffect(()=>{
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(
        response => {
          const filteredCountries = response.data.filter((country)=>country.name.common.toLowerCase().indexOf(key.toLowerCase())!==-1)
          setFilteredCountries(filteredCountries);
        }
      )
  }, [key]);

  useEffect(() => {
    const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
    const REACT_APP_WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    if (filteredCountries.length===1){
      const capital = filteredCountries[0].capital;
      axios
          .get(`${baseUrl}?q=${capital}&appid=${REACT_APP_WEATHER_API_KEY}`)
          .then(response => {
              setWeatherData(response.data)
    });
    }
}, [key]);

  const handleChange = e => setKey(e.target.value)

  return (
    <div className="App">
      <div>
        find countries: <input value={key} onChange={handleChange}></input>
      </div>
      <CountryInfo filteredCountries={filteredCountries} weatherData={weatherData}/>
    </div>
  );
}

export default App;
