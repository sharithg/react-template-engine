import React from "react";
import Loader from "../Loader/Loader";
import "./Button.css";
import { FaCog } from "react-icons/fa";

export default function Button({
  display,
  title,
  isLoading,
  disabled,
  onClick,
  gear,
  copied,
}) {
  return (
    <button
      className={`button ${display === "flex" ? "flex" : ""}`}
      type="button"
      disabled={disabled === true ? true : false}
      onClick={onClick}
      style={{ backgroundColor: copied ? "green" : null }}
    >
      {isLoading === true ? <Loader /> : title}
      {gear && !isLoading ? (
        <>
          <div style={{ marginRight: 10 }} />
          <FaCog style={{ marginTop: 1 }} />
        </>
      ) : (
        ""
      )}
    </button>
  );
}
