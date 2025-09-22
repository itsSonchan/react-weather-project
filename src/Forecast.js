import React from "react";
import "./App.css";

export default function Forecast(props) {
  return (
    <div className="row forecast">
      <div className="col-1"></div>
      <div className="col-2">Mon, 22nd</div>
      <div className="col-2">Tue, 23rd</div>
      <div className="col-2">Wed, 24th</div>
      <div className="col-2">Thu, 25th</div>
      <div className="col-2">Fri, 26th</div>
      <div className="col-1"></div>
    </div>
  );
}
