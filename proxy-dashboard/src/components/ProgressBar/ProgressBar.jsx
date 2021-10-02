import React from "react";
import "./ProgressBar.css";

const calculatePercent = (usage, total) => {
  return ((usage / total) * 100).toFixed(1);
};

export default function ProgressBar({ usage, total }) {
  return (
    <div className="progress__bar">
      <div className="progress__content">
        <p className="progress__text">
          {usage}GB <span> of {total}GB</span>
        </p>
        <p className="progress__percent">{calculatePercent(usage, total)}%</p>
      </div>
      <progress
        value={calculatePercent(usage, total).toString()}
        max="100"
        className="progress"
      ></progress>
    </div>
  );
}
