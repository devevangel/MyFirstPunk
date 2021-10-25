import React from "react";

import Punk from "../punks/Punks";
import Creation from "../creation/creation.component";
import Distribution from "../distribution/distribution.component";
import Team from "../team/team.component";
import RoadMap from "../roadmap/RoadMap";
import ActionButton from "../actionbutton/actionButton.component";

import "./holder.css";

const Holder = () => (
  <div className="holder-container">
    <div className="holder-main">
      <Punk />
      <Creation />
      <Distribution />
      <RoadMap />
      <ActionButton />
      <Team />
    </div>
  </div>
);

export default Holder;
