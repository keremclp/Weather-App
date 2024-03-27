import React from "react";
/*import Logo.svg from public folder*/
import Logo from "../Vector.svg";
import { useState } from "react";
function SearchBar({ onCitySelect }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  // const apiKey = process.env.WEATHER_APP_KEY; check the using of env variables
  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${term}&appid=ca248cee0c1175401424a91fab6b1b59`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSearchResults(data.list);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleSelectCity = (city) => {
    onCitySelect(city);
    setSearchTerm("");
    setSearchResults([]);
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
            value={searchTerm}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </>
  );
}

export default SearchBar;
