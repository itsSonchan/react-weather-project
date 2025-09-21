import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="info-section">
      <h1>{props.data.city}</h1>
      <div className="row">
        <div className="col-6">
          <ul>
            <li className="date">
              <FormattedDate date={props.data.date} />
            </li>
            <li>
              <WeatherIcon data={props.data} />
              <span className="current-temp">
                {Math.round(props.data.temperature)}
                <span className="unit">°C</span>
              </span>
            </li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li className="text-capitalize">{props.data.condition}</li>
            <li>Humidity: {Math.round(props.data.humidity)}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
