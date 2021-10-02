import React, { useState } from "react";
import "./MobileNavbar.css";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FooterUser } from "../index";

const tabs = ["Residential", "Datacenter", "ISP"];
const location = window.location.pathname.substr(1);

export default function MobileNavbar() {
  const [isVisible, setIsVisible] = useState();

  const toggle = () => setIsVisible(!isVisible);
  return (
    <div style={{ zIndex: 10 }}>
      <div className="mobile__navbar">
        <img
          src={"https://i.imgur.com/1VsRef6.png"}
          alt="logo"
          className="mobile__logo"
        />
        <button onClick={toggle}>
          <HiOutlineMenuAlt3 color="#fff" size={24} />
        </button>
      </div>

      {isVisible && (
        <div className="menu__item__container">
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

          <div className="mobile__nav__footer">
            <FooterUser />
          </div>
        </div>
      )}
    </div>
  );
}
