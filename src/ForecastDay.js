import React from "react";
import ForecastIcon from "./ForecastIcon";
import moment from "moment";

export default function ForecastDay(props) {
  let date = moment(props.data.time * 1000).format("ddd, Do");
  let tempMin = props.data.temperature.minimum;
  let tempMax = props.data.temperature.maximum;
  if (props.unit === "Celsius") {
    tempMin = Math.round(props.data.temperature.minimum);
    tempMax = Math.round(props.data.temperature.maximum);
  } else {
    tempMin = Math.round((props.data.temperature.minimum * 9) / 5 + 32);
    tempMax = Math.round((props.data.temperature.maximum * 9) / 5 + 32);
  }
  return (
    <div className="col-md-2 forecast-day">
      {date} <ForecastIcon data={props.data} time={props.time} />
      <div className="forecast-temps">
        <span className="temp-min">{tempMin}° </span>
        <strong className="temp-max"> {tempMax}°</strong>
      </div>
    </div>
  );
}
