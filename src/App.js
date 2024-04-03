import "./App.css";
/* import Searchbar component from component file */
import Searchbar from "./components/SearchBar";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
    searchData.forEach((city) => {
      // Split the value property of each city object
      const [lat, lon] = city.value.split(" ");
      // Now you can use lat and lon as needed
      const currentWeatherFetch = fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ca248cee0c1175401424a91fab6b1b59&units=metric`
      );
      const forecastFetch = fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=ca248cee0c1175401424a91fab6b1b59&units=metric`
      );

      Promise.all([currentWeatherFetch, forecastFetch])
        .then(async (response) => {
          const weatherResponse = await response[0].json();
          const forcastResponse = await response[1].json();

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
