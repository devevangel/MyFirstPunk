import React from "react";

import CapGuy from "../../assets/img/cap_guy_gif_face_last.gif";
import Face from "../../assets/img/Face_creation.gif";

import "./creation.styles.css";

const Creation = () => (
  <div className="creation-container">
    <div className="creation-holder">
      <div className="content">
        <span className="creation-title">CREATION PROCESS</span>
        <p className="creation-text">
          <div className="content-text-holder">
            Infant.Anon is a 7 month old baby-artist who loves to bash and swipe
            on daddy's tablet and see the pretty colors appear.
            <br />
            <br />
            After lots of fun, many failed attempts and 1 cracked screen,
            bubba's squiggle drawings were used to recreated each of the punk
            trait layers in his own style.
            <br />
            <br />
            Proud daddy loaded the 125 new attribute artworks into a generating
            script and out popped 10,000 MyFirstPunks.
            <br />
            <br />
            MyFirstPunks have been created using the same attribute recipes as
            CryptoPunks to ensure there is a baby-drawn twin for each one.
            <br />
            <br />
            Each MyFirstPunk is stored as an ERC721 token on the Ethereum
            blockchain.
            <br />
            <br />
            Infant.Anon doesn’t care if you like his art... he’s a baby!
          </div>
        </p>
      </div>
      <div className="spacer"></div>
      <div className="punk-gif-container">
        <img className="punk-image" alt="img" src={CapGuy} />
        <img className="punk-image" alt="img" src={Face} />
      </div>
    </div>
  </div>
);

export default Creation;
