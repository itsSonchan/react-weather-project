import React from "react";
import "./App.css";
export default function Forecast(props) {
  return (
    <div className="row forecast justify-content-center gx-3">
      <div className="col-2  ">
        Mon, 22nd{" "}
        <img
          src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/174/058/original/Unbenanntes_Projekt.png?1758541047"
          alt="forecast icon"
          className="forecast-icon"
          width={80}
        ></img>
      </div>
      <div className="col-2">
        Tue, 23rd{" "}
        <img
          src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/174/058/original/Unbenanntes_Projekt.png?1758541047"
          alt="forecast icon"
          className="forecast-icon"
          width={80}
        ></img>
      </div>
      <div className="col-2">
        Wed, 24th{" "}
        <img
          src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/174/058/original/Unbenanntes_Projekt.png?1758541047"
          alt="forecast icon"
          className="forecast-icon"
          width={80}
        ></img>
      </div>
      <div className="col-2">
        Thu, 25th{" "}
        <img
          src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/174/058/original/Unbenanntes_Projekt.png?1758541047"
          alt="forecast icon"
          className="forecast-icon"
          width={80}
        ></img>
      </div>
      <div className="col-2">
        Fri, 26th{" "}
        <img
          src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/174/058/original/Unbenanntes_Projekt.png?1758541047"
          alt="forecast icon"
          className="forecast-icon"
          width={80}
        ></img>
      </div>
    </div>
  );
}
