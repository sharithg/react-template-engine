import React from "react";
import "./Card.css";
import { getHex } from "../../utils";

export default function Card({ children, bg }) {
  return (
    <div
      className="card"
      style={{
        backgroundColor: bg
          ? getHex("--stroke-light-color")
          : getHex("--fill-color"),
      }}
    >
      {children}
    </div>
  );
}
