import React from "react";

import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import TemperatureConvert from "./TemperatureConvert";

export default function WeatherInfo(props) {
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
                <TemperatureConvert data={props.data.celsius} />
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
