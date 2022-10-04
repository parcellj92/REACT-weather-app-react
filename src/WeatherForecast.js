import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <strong>
            <div className="WeatherForecast-day">Thu</div>
          </strong>
          <div className="WeatherForecast-icon">☀️</div>
          <div classname="WeatherForecast-temp">
            <strong>
              <span classname="WeatherForecast-temp-max">68˚</span>{" "}
            </strong>
            <span className="WeatherForecast-temp-min">47˚</span>
          </div>
        </div>
      </div>
    </div>
  );
}
