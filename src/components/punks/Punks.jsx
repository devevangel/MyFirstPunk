import React from "react";

import Drawing from "../../assets/img/IA_drawing.gif";
import Looping from "../../assets/img/looping MyFirstPunks.gif";

import "./Punks.css";

const Punks = () => (
  <div className="punk-container">
    <div className="punk-holder">
      <div className="punk-gif-container">
        <img className="punk-image" alt="img" src={Drawing} />
        <img className="punk-image" alt="img" src={Looping} />
      </div>
      <div className="punk-spacer"></div>
      <div className="punk-content">
        <span className="punk-title">PUNKS, MADE BY A BABY</span>
        <br />
        <p className="punk-text">
          <div className="text-holder">
            Inspired by all the haters who say “my kid could draw that” about
            our favourite collectibles...
            <br />
            <br />
            <br />
            MyFirstPunks are a 1:1 depiction of all 10,000 CryptoPunks,
            reimagined by the hand of 7-month-old artist Infant.Anon
            <br />
            <br />
            <br />
            Absurd? Top signal? Super cute collectible? Whatever you think,
            MyFirstPunks will hold a place in history as the first
            baby-generated-NFT project.
            <br />
            <br />
            <br />
            <span className="punk-sub-text">
              This project is not affiliated in any way with LarvaLabs
            </span>
          </div>
        </p>
      </div>
    </div>
  </div>
);

export default Punks;
