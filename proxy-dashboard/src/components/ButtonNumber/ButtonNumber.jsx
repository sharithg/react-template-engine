import React, { useState } from "react";
import "./ButtonNumber.css";

export default function ButtonNumber() {
  const [storage, setStorage] = useState(1);

  const increament = () => setStorage(storage + 1);
  const decreament = () => setStorage(storage <= 1 ? 1 : storage - 1);

  return (
    <div className="button__number">
      <button onClick={decreament}>-</button>
      <p>{storage} GB</p>
      <button onClick={increament}>+</button>
    </div>
  );
}
