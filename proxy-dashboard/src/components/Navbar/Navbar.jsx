import { Button } from "../../components";
import React from "react";
import FooterUser from "../FooterUser/FooterUser";
import "./Navbar.css";
import { iconUrl } from "../../theme";

const tabs = ["Residential", "Datacenter", "ISP"];

const location = window.location.pathname.substr(1);

console.log(location);

export default function Navbar() {
  return (
    <div className="navbar">
      {/* <div className="box1"> */}
      <img
        src={iconUrl}
        height={70}
        alt="Killer Proxies"
        className="sidebar__logo"
      />
      {/* </div> */}
      <div className="box1">
        <ul className="nav-links">
          {tabs.map((tab, idx) => (
            <li className={`nav-link`}>
              <a
                className={`${
                  location === tab.toLocaleLowerCase()
                    ? "active-link"
                    : "nav-link-a"
                }`}
                key={idx}
                href={`/${tab.toLocaleLowerCase()}`}
              >
                {tab}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="box2" style={{ display: "flex" }}>
        <div className="footer-user">
          <FooterUser />
        </div>
        <div>
          <Button title="Home" />
        </div>
      </div>
    </div>
  );
}
