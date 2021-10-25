import React from "react";

import Video from "../../assets/vid/pc1.mp4";

import "./IntroVideo.css";

const IntroVideo = () => (
  <div className="main-video-container">
    <video className="intro-video" autoPlay loop playsInline muted>
      <source src={Video} type="video/mp4" />
    </video>
  </div>
);

export default IntroVideo;
