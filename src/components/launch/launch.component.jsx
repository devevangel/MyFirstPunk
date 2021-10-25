import React from "react";

import "./launch.styles.css";

// 16 days 0 hrs 59 min 42 sec Until Launch

const Launch = () => (
  <div className="launch-contianer">
    <span className="countdown">Coming Soon</span>
    <div className="countdown-card">
      <div className="items">
        <span className="sold">Sold Out</span>
        <span className="sub-text">Sales Status</span>
      </div>
      <div className="items">
        <span className="price">--</span>
        <span className="sub-text">Price</span>
      </div>
      <div className="items">
        <span className="number">0</span>
        <span className="sub-text">Number Left to Mint</span>
      </div>
    </div>
  </div>
);

export default Launch;
