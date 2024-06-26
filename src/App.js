import "./App.css";
/* import Searchbar component from component file */
import Searchbar from "./components/SearchBar";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { WEATHER_API_URL } from "./api";
function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    console.log("searchdata:",searchData);
    searchData.forEach((city) => {
      console.log("city:", city);
      // Split the value property of each city object
      const [lat, lon] = city.value.split(" ");
      console.log("lat:",lat);
      console.log("lon:",lon);
      console.log(city.label);
      // Now you can use lat and lon as needed
      const currentWeatherFetch = fetch(
        `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=ca248cee0c1175401424a91fab6b1b59&units=metric`
      );
      const forecastFetch = fetch(
        `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=ca248cee0c1175401424a91fab6b1b59&units=metric`
      );
     
      Promise.all([currentWeatherFetch, forecastFetch])
        .then(async (response) => {
          const weatherResponse = await response[0].json();
          const forcastResponse = await response[1].json();
          console.log("weatherResponse:",weatherResponse);
          console.log("forcastResponse:",forcastResponse);
          setCurrentWeather({ city: city.label, ...weatherResponse });
          setForecast({ city: city.label, ...forcastResponse });
          

        })
        .catch();
    });
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Searchbar onSearchChange={handleOnSearchChange} />}
          />
          <Route
            path="/home"
            element={
              <Home currentWeather={currentWeather} forecast={forecast} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
