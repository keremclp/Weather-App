import React from "react";
import { useLocation } from "react-router-dom";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
const Home = ({ currentWeather, forecast }) => {
  // Access the location object and extract the state
  const { state } = useLocation();
  // Access the selected result from the state
  const selectedResult = state?.selectedResult;

  // Render your Home component with the selected result
  return (
    <div className="flex justify-center m-2 bg-gray-800  ">
      <div className="p-3 bg-white  ">
        <div className="card">
          <div className="current-weather w-[335px] h-[304px]">
            {currentWeather && <CurrentWeather data={currentWeather} />}
          </div>
        </div>
        {/* <div className="current-weather">
            {currentWeather && <CurrentWeather data={currentWeather} />}
          </div>
          <div className="forecast">
            {forecast && <Forecast data={forecast} />}
          </div> */}
      </div>
    </div>
  );
};

export default Home;
