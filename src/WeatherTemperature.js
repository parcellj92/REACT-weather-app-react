import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  if (unit === "fahrenheit") {
    return (
      <div className="WeatherTemperature">
        <h1>
          <span>{Math.round(props.temperature)}</span>
          <span className="unit align-text-top">
            ˚F |{" "}
            <a href="/" onClick={showCelcius}>
              ˚C
            </a>
          </span>
        </h1>
      </div>
    );
  } else {
    let celcius = Math.round(((props.temperature - 32) * 5) / 9);
    return (
      <div className="WeatherTemperature">
        <h1>
          <span>{celcius}</span>
          <span className="unit align-text-top">
            <a href="/" onClick={showFahrenheit}>
              ˚F
            </a>
            | ˚C
          </span>
        </h1>
      </div>
    );
  }
}
