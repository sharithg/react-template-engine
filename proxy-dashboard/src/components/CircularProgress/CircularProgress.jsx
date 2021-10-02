import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { getHex } from "../../utils";

// var circumference = radius * 2 * Math.PI;

// circle.style.strokeDasharray = `${circumference} ${circumference}`;
// circle.style.strokeDashoffset = `${circumference}`;

// function setProgress(percent) {
//   const offset = circumference - (percent / 100) * circumference;
//   circle.style.strokeDashoffset = offset;
// }

const CircularProgress = ({ percent }) => {
  return (
    <div style={{ width: 150, height: 150, marginTop: 10 }}>
      <CircularProgressbar
        value={percent}
        text={`${percent}%`}
        styles={buildStyles({
          textColor: "#fff",
          trailColor: getHex("--stroke-light-color"),
          pathColor: getHex("--primary-color"),
          backgroundColor: getHex("--stroke-light-color"),
        })}
      />
    </div>
  );
};

export default CircularProgress;
