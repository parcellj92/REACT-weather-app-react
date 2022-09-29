import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celcius");
  function showFahrenheit(event){
      event.preventDefault();
      setUnit("fahrenheit");
  }

function showCelicius(event){
    event.preventDefault();
    setUnit("celcius");
}

  if (unit === "fahrenheit") {
    return (
      <div className="WeatherTemperature">
        <h1>
          <span>{weather.temperature}</span>
          <span className="unit align-text-top">
            ˚F | <a href="/" onClick={showCelcius}>˚C</a>
          </span>
        </h1>
      </div>
    );
  } else {
      let celcius = (weather.temperature − 32) × 5/9; 
    return (
      <div className="WeatherTemperature">
        <h1>
          <span>{celcius}</span>
          <span className="unit align-text-top">
            ˚F |{" "}
            <a href="/" onClick={showCelcius}>
              ˚C
            </a>
          </span>
        </h1>
      </div>
    );
  }
}
