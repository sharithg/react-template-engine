import React from "react";
import "./Footer.css";
// import { logo_name } from "../../assets";
import { iconUrl } from "../../theme";

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <img src={iconUrl} alt="brand logo" width={400} />
      </div>
      <p>
        @ {new Date().getFullYear()} Proxy Dashboard by{" "}
        <a
          href="https://torchlabs.xyz/"
          style={{
            color: "white",
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          Torch Labs
        </a>
      </p>
    </div>
  );
}
