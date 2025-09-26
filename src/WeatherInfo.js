import React from "react";

import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  let temperature = props.data.celsius;
  if (props.unit === "Celsius") {
    temperature = props.data.celsius;
  } else {
    temperature = props.data.fahrenheit;
  }
  return (
    <div className="info-section">
      <h1>
        {props.data.city}, {props.data.country}
      </h1>
      <FormattedDate date={props.data.date} />
      <div className="today-info">
        <div className="row">
          <div className="col-md-6">
            <ul>
              <li className="icon-and-temp">
                <WeatherIcon data={props.data} />
                <span className="current-temp">
                  {Math.round(temperature)}°
                </span>{" "}
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul className="right-side">
              <li className="text-capitalize">{props.data.condition}</li>
              <li>Humidity: {Math.round(props.data.humidity)}%</li>
              <li>Wind: {Math.round(props.data.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
