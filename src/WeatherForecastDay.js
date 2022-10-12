import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}˚`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}˚`;
  }

  function icon() {
    let icon = (
      <img
        src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
        alt="icon"
        width="42"
      ></img>
    );
    return icon;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <strong>
        <div className="WeatherForecast-day">{day()}</div>
      </strong>
      <div className="WeatherForecast-icon">{icon()}</div>
      <div classname="WeatherForecast-temp">
        <strong>
          <span classname="WeatherForecast-temp-max">{maxTemperature()}</span>{" "}
        </strong>
        <span className="WeatherForecast-temp-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
