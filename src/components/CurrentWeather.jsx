import React from "react";
import WeatherDetail from "./WeatherDetail";
function CurrentWeather({ data }) {
  const getCurrentDayAndDate = () => {
    const currentDate = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return currentDate.toLocaleDateString("en-US", options);
  };

  return (
    <div className="relative">
      <div className="absolute top-[20px] left-[20px]  ">
        <div className="location">
          {data && (
            <div className="flex flex-col">
              <div className="font-nunito font-bold text-lg leading-[22.4px] text-center text-white">
                {data.city}
              </div>
              <div className="w-34 h-4 font-nunito font-normal text-xs leading-5 flex items-center justify-center text-center text-white flex-none order-1 flex-grow-0">
                {getCurrentDayAndDate()}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="absolute top-[141px] left-[16px] p-1 gap-2">
        {data && (
          <div className="">
            <div className="text-white flex flex-col">
              <p className="font-nunito font-extrabold text-5xl leading-[57.6px] text-left">
                {Math.round(data.main.temp)}°<small>C</small>
              </p>
              <div className="">
                <p className="font-nunito font-bold text-base leading-[22.4px] text-left">
                  {Math.round(data.main.temp_min)} °<small>C</small> /{" "}
                  {Math.round(data.main.temp_max)} °<small>C</small>
                </p>
                <p className="font-nunito font-normal text-base leading-6 text-left">
                  {data.weather[0].description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="absolute top-[120px] right-[20px]">
        {data && (
          <img
            alt="weather"
            className="w-[100px]"
            src={`icons/${data.weather[0].icon}.png`}
          />
        )}
      </div>
    </div>
  );
}

export default CurrentWeather;
