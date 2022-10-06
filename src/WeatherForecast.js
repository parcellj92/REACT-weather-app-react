import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  console.log(props);
  let longitude = props.coord.lon;
  let latitude = props.coord.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=80e7e03978eecacba428a41c3f4a5874&units=imperial`;
  axios.get(apiUrl).then(handleResponse);

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
