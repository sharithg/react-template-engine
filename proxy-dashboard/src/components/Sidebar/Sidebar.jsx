import React from "react";
import "./styles.css";
import MenuItem from "./MenuItem";
import * as icons from "../../assets";
import { FooterUser } from "../index";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <img
        src={"https://i.ibb.co/48YQYkH/Facebook-Logo-2.png"}
        height={70}
        alt="logo"
        className="sidebar__logo"
      />
      <MenuItem text="Residential" src={icons.icon_1} active />
      <div className="siderbar__footer">
        <FooterUser />
      </div>
    </div>
  );
}
