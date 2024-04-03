import React from "react";

function Forecast({ data }) {
  return (
    <div>
      {data.list.splice(0, 7).map((item, idx) => (
        <div key={idx}>
          <h1>{item.dt_txt}</h1>
          <h2>{item.weather[0].description}</h2>
          <h2>{item.main.temp}°C</h2>
        </div>
      ))}
    </div>
  );
}

export default Forecast;
