import React from "react";
import "./Admin.css";
import { Navbar, MobileNavbar, Footer } from "../components";
import { Home } from "../views";
export default function Admin() {
  return (
    <div className="admin">
      {/* <Sidebar /> */}
      <div className="views">
        <Navbar />
        <MobileNavbar />
        <Home />
        <Footer />
      </div>
    </div>
  );
}
