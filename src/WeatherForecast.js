import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WaetherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <div className="WeatherForecast-icon">☀️ </div>
          <div classname="WeatherForecast-temp">
            <span classname="WeatherForecast-temp-max">68</span>{" "}
            <span className="WeatherForecast-temp-min">47</span>
          </div>
        </div>
      </div>
    </div>
  );
}
