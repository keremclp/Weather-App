import React from "react";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import WeatherDetail from "./WeatherDetail";
const Home = ({ currentWeather, forecast }) => {
  return (
    <>
      <div className="flex flex-col justify-center content-center bg-gray-900 rounded-lg ">
        <div className="p-2 bg-gray-800 rounded-md m-1">
          <div className="card">
            <div className="current-weather w-[335px] h-[304px]">
              {currentWeather && <CurrentWeather data={currentWeather} />}
            </div>
          </div>
        </div>
        <div className="p-2 mt-1 bg-gray-800 rounded-md m-1">
          <div className="card">
            <div className="w-full h-[284px] ">
              <WeatherDetail data={currentWeather} />
            </div>
          </div>
        </div>
        <div className="p-2 mt-1 bg-gray-800 rounded-md m-1">
          <div className="card">
            <div className="w-full h-[176px] ">
              <Forecast data={forecast} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
