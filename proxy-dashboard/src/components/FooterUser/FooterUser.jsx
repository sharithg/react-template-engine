import React from "react";
import "./FooterUser.css";
import { useAuth } from "../../contexts/AuthContext";

export default function FooterUser() {
  const { currentUser } = useAuth();

  console.log(currentUser);

  return (
    <div className="footer__user" style={{ marginTop: 0 }}>
      <img
        src={`https://cdn.discordapp.com/avatars/${currentUser.discordId}/${currentUser.avatar}.png`}
        alt="robot_icon"
        className="footer__icon"
      />
      <div className="proxy">
        <p className="welcome-back">Welcome Back!</p>
        <div className="user">
          <p>
            {currentUser.username}#{currentUser.discriminator}
          </p>
          <div className="active__user"></div>
        </div>
        <p className="logout">Logout</p>
      </div>
    </div>
  );
}
