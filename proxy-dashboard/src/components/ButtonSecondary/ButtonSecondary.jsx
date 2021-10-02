import React from "react";
import "./ButtonSecondary.css";

export default function ButtonSecondary({ title, onClick }) {
  return (
    <button onClick={onClick} className="button__secondary" type="button">
      {title || "Button"}
    </button>
  );
}
