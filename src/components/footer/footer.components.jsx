import React from "react";
import { FaDiscord, FaTwitter, FaShip } from "react-icons/fa";

import "./footer.styles.css";

const Footer = () => (
  <div className="footer">
    <div className="footer-icons">
      <p>
        <FaShip className="icon" />
      </p>
      <p>
        <FaTwitter className="icon" />
      </p>
      <p>
        <FaDiscord className="icon" />
      </p>
    </div>
  </div>
);

export default Footer;
