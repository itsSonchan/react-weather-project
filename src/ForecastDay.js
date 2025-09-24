import React from "react";
import ForecastIcon from "./ForecastIcon";
import moment from "moment";

export default function ForecastDay(props) {
  let date = moment(props.data.time * 1000).format("ddd, Do");
  return (
    <div className="col-2  ">
      {date} <ForecastIcon data={props.data} time={props.time} />
      <div>
        <span className="temp-min">
          {Math.round(props.data.temperature.minimum)}°{" "}
        </span>
        <strong className="temp-max">
          {" "}
          {Math.round(props.data.temperature.maximum)}°
        </strong>
      </div>
    </div>
  );
}
