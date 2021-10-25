import React from "react";
import { FaDiscord, FaTwitter, FaShip } from "react-icons/fa";

import Logo from "../../assets/img/Header logo.svg";

import "./header.styles.css";

const Header = () => (
  <header className="navbar">
    <div className="holder">
      <div className="logo">
        <img className="logo-img" alt="img" src={Logo} />
      </div>
      <div className="navbar-link-holder">
        <button className="items navbar-link connect-button">Connect...</button>
        <a
          href="https://twitter.com/infant_anon"
          target="_blank"
          rel="noreferrer"
          className="app-links"
        >
          <FaShip className="items icon-header" />
        </a>
        <a
          href="https://twitter.com/infant_anon"
          target="_blank"
          rel="noreferrer"
          className="app-links"
        >
          <FaTwitter className="items icon-header" />
        </a>
        <a
          href="https://discord.gg/MwzYRz9qHD"
          target="_blank"
          rel="noreferrer"
          className="app-links"
        >
          <FaDiscord className="items icon-header" />
        </a>
      </div>
    </div>
  </header>
);

export default Header;
