import React from "react";
import moment from "moment";

export default function FormattedDate(props) {
  let date = moment(props.date * 1000).format("dddd, MMMM Do");
  return <div className="date">{date}</div>;
}
