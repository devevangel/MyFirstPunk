import React from "react";

import InfantAnon from "../../assets/img/Profile_pic_anon_copy.png";
import CuriousJosh from "../../assets/img/curiousape.png";
import Jester from "../../assets/img/Jester1.png";

import "./team.styles.css";

const Team = () => (
  <div className="team">
    <div className="team-holder">
      <h2 className="team-title">THE TEAM</h2>
      <div className="team-list">
        <div className="team-container">
          <img className="team-img" alt="img" src={InfantAnon} />
          <a
            href="https://twitter.com/infant_anon"
            target="_blank"
            rel="noreferrer"
            className="team-name-main"
          >
            Infant.Anon
          </a>
          <span className="team-role">Artist</span>
        </div>
        <div className="team-container">
          <img className="team-img" alt="img" src={CuriousJosh} />
          <a
            href="https://twitter.com/curiousjosh"
            target="_blank"
            rel="noreferrer"
            className="team-name"
          >
            CuriousJosh
          </a>
          <span className="team-role">Developer</span>
        </div>
        <div className="team-container">
          <img className="team-img" alt="img" src={Jester} />
          <a
            href="https://twitter.com/IconJester"
            target="_blank"
            rel="noreferrer"
            className="team-name"
          >
            TheIconJester
          </a>
          <span className="team-role">Community Manager</span>
        </div>
      </div>
    </div>
  </div>
);

export default Team;
