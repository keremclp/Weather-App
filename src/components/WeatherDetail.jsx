import React from "react";
import Thermal from "../assets/weather-icons/thermal.svg";
import Wind from "../assets/weather-icons/Wind.svg";
import Rain from "../assets/weather-icons/rain.svg";
import Humidity from "../assets/weather-icons/Humidity.svg";
import Sunrise from "../assets/weather-icons/Sunrise.svg";

function WeatherDetail({ data }) {
  if (!data) {
    return <div>No weather data available</div>;
  }
  const thermalSensation = data.main.feels_like;
  console.log("data:",data);
  // Calculate rain probability percentage
  const rainProbability = data.main === "Rain" ? "High" : "Low";
  return (
    <div className="relative">
      <div className="w-[327px] h-[56px] absolute top-[0px] left-[0px] py-4">
        <div className="w-[325px] h-[24px] px-2">
          {data && (
            <>
              <div className="flex flex-row items-start justify-between border-b border-solid border-gray-700 ">
                <div className="flex flex-row mb-5">
                  <img
                    src={Thermal}
                    alt="logo"
                    className="w-6 h-6 object-contain"
                  />
                  <p className="text-white w-full px-2  font-nunito font-bold ">
                    Thermal Senstaion
                  </p>
                </div>
                <p className="text-white">{Math.round(thermalSensation)}</p>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="w-[327px] h-[56px] absolute top-[60px] left-[0px] py-4">
        <div className="w-[325px] h-[24px] px-2">
          {data && (
            <>
              <div className="flex flex-row items-start justify-between border-b border-solid border-gray-700 ">
                <div className="flex flex-row mb-5">
                  <img
                    src={Rain}
                    alt="logo"
                    className="w-6 h-6 object-contain"
                  />
                  <p className="text-white w-full px-2  font-nunito font-bold ">
                    Rain Probability
                  </p>
                </div>
                <p className="text-white">
                  {rainProbability === "High" ? "100%" : "0%"}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="w-[327px] h-[56px] absolute top-[120px] left-[0px] py-4">
        <div className="w-[325px] h-[24px] px-2">
          {data && (
            <>
              <div className="flex flex-row items-start justify-between border-b border-solid border-gray-700 ">
                <div className="flex flex-row mb-5">
                  <img
                    src={Wind}
                    alt="logo"
                    className="w-6 h-6 object-contain"
                  />
                  <p className="text-white w-full px-2  font-nunito font-bold ">
                    Wind Speed
                  </p>
                </div>
                <p className="text-white">{Math.round(data.wind.speed)} m/s</p>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="w-[327px] h-[56px] absolute top-[180px] left-[0px] py-4">
        <div className="w-[325px] h-[24px] px-2">
          {data && (
            <>
              <div className="flex flex-row items-start justify-between border-b border-solid border-gray-700 ">
                <div className="flex flex-row mb-5">
                  <img
                    src={Humidity}
                    alt="logo"
                    className="w-6 h-6 object-contain"
                  />
                  <p className="text-white w-full px-2  font-nunito font-bold ">
                    Humidity
                  </p>
                </div>
                <p className="text-white">{data.main.humidity}%</p>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="w-[327px] h-[56px] absolute top-[240px] left-[0px] py-4">
        <div className="w-[325px] h-[24px] px-2">
          {data && (
            <>
              <div className="flex flex-row items-start justify-between ">
                <div className="flex flex-row mb-5">
                  <img
                    src={Sunrise}
                    alt="logo"
                    className="w-6 h-6 object-contain"
                  />
                  <p className="text-white w-full px-2  font-nunito font-bold ">
                    Sunrise
                  </p>
                </div>
                <p className="text-white">
                  {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default WeatherDetail;
