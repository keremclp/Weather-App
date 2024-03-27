import React from "react";
/*import Logo.svg from public folder*/
import Logo from "../Vector.svg";
import { useState, useEffect } from "react";
import axios from "axios";
function SearchBar({ onCitySelect }) {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = async (e) => {
    const cityName = e.target.value;
    setCity(cityName);

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ca248cee0c1175401424a91fab6b1b59`
      );
      setWeatherData(response.data);
      setError(null);
    } catch (error) {
      setError("Error fetching weather data. Please check your city name.");
      setWeatherData(null);
    }
  };

  useEffect(() => {}, [weatherData]);

  const handleSelectCity = (selectedCity) => {
    // Handle when a city is selected from the combobox
    console.log(selectedCity);
    console.log("Selected city:", selectedCity);
  };
  return (
    /*Use logo.svg*/
    <>
      <div className="logo">
        <div className="logo-main">
          <img src={Logo} alt="logo" className="vector" />
          <div className="text">i</div>
          <div className="text-layer">Weather</div>
        </div>
      </div>
      <div className="welcome">
        <div className="title">
          <div className="title-typeweather">
            Welcome to <span className="typeweather">TypeWeather!</span>
          </div>
          <div className="explanation">
            Choose a location to see the weather forecast
          </div>
        </div>
        <div className="text-field">
          <input
            type="text"
            placeholder="Search a location"
            value={city}
            onChange={handleChange}
          />
          <select onChange={handleChange}>
            <option>Select a city</option>
            {weatherData && (
              <option value={weatherData.name}>{weatherData.name}</option>
            )}
          </select>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
