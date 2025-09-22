import React, { useState } from "react";
import "./App.css";

export default function TemperatureConvert(props) {
  const [unit, SetUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    SetUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    SetUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="temp">
        <span className="current-temp">{Math.round(props.data)}</span>
        <span className="unit">
          °C l{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.data * 9) / 5 + 32;
    return (
      <div className="temp">
        <span className="current-temp">{Math.round(fahrenheit)}</span>
        <span className="unit">
          <a href="/" onClick={showCelsius}>
            °C{" "}
          </a>
          l °F
        </span>
      </div>
    );
  }
}
