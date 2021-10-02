import React from "react";
import "./styles.css";

export default function MenuItem({ text, src, active }) {
  return (
    <div className="menu__item">
      <img src={src} alt="logo" className="menu__icon" />
      <p className={active ? "active" : ""}>{text}</p>
    </div>
  );
}
