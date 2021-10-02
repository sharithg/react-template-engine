import React from "react";
import "./ButtonIcon.css";
import * as icons from "../../assets";

export default function ButtonIcon({ title, icon }) {
  return (
    <button className="button__icon" type="button">
      {icon && <img src={icons[icon]} alt="social icon" />}
      {title || "Button"}
    </button>
  );
}
