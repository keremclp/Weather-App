import React from "react";

function CurrentWeather({ data }) {
  console.log("data:", data);
  return (
    <div>
      <h1>{data.city}</h1>
      <h2>{data.weather[0].description}</h2>
      <h2>{data.main.temp}°C</h2>
    </div>
  );
}

export default CurrentWeather;
