import React from "react";

const WEEK_DAYS = ["Mon", "Tue", "Wed", "Thu", "Sun"];
function Forecast({ data }) {
  if (!data) {
    return <div>No weather data available</div>;
  }
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek + 1).concat(
    WEEK_DAYS.slice(0, dayInAWeek + 1)
  );

  return (
    <>
      <div className="relative">
        <div className="absolute w-[335px] h-[152px] top-3 flex flex-row">
          {data.list.splice(0, 5).map((item, idx) => (
            <div className="w-[67px] h-[152px] gap-1 ml-1">
              <p className="text-white"> {forecastDays[idx]} </p>
              <img
                src={`icons/${item.weather[0].icon}.png`}
                className="w-14 mt-1"
                alt="weather"
              />
              <p className="font-nunito font-bold text-xs text-white mt-6">
                {Math.round(item.main.temp)}°<small>C</small>
              </p>
              <p className="font-nunito font-normal text-xs text-gray-400">
                {Math.round(data.list[0].main.temp)}°<small>C</small>
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Forecast;
