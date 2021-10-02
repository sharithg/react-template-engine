import React from "react";
import "./Dropdown.css";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

export default function Dropdown({
  options,
  values = [],
  title,
  type,
  icon,
  onChange,
  value,
  country,
  onSelectChange,
  width,
  disabled,
  style,
}) {
  return (
    <div className="dropdown" style={style || null}>
      {icon ? (
        <div className="label">
          {icon()}
          {title ? <p>{title}</p> : ""}
        </div>
      ) : (
        <> {title ? <p style={{ fontWeight: 500 }}>{title}</p> : ""}</>
      )}
      {type === "text" ? (
        <input
          type="number"
          max="5000"
          value={value}
          onChange={onChange}
          style={{ width: width || null }}
          disabled={disabled}
        />
      ) : type === "country" ? (
        <CountryDropdown value={value} onChange={onChange} />
      ) : type === "region" ? (
        <RegionDropdown country={country} value={value} onChange={onChange} />
      ) : (
        <select
          onChange={onSelectChange}
          style={{ width: width || null }}
          disabled={disabled}
          value={value}
        >
          {options?.length
            ? options.map((option, index) => (
                <option key={index} value={values[index] || option}>
                  {option}
                </option>
              ))
            : null}
        </select>
      )}
    </div>
  );
}
