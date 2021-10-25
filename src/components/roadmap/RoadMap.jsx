import React from "react";

import "./RoadMap.css";

const RoadMap = () => (
  <div className="roadmap-container">
    <div className="roadmap-holder">
      <div className="roadmap-content">
        <span className="roadmap-title">ROADMAP</span>
        <div className="progress-container">
          <div className="maps">
            <span className="head light-green">PRE SALE</span>
            <div className="point">
              <span className="point-title">Hat Tip CryptoPunk Community</span>
              <br />
              <div className="spacing"></div>
              We will tip our hat to the CryptoPunk Community with a 100
              MyFirstPunk giveaway exclusive to CryptoPunk owners.
              <br />
              <br />
              This will be followed by a 7 day private sale where only
              CryptoPunk owners can mint matching MyFirstPunks for any
              CryptoPunk they hold in their wallet. Price is .025 ETH each.
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="maps">
            <span className="head light-orange">PUBLIC SALES</span>
            <div className="point">
              <span className="point-title">Public Sale Opens</span>
              <br />
              <div className="spacing"></div>
              The sale opens to the public! MyFirstPunks can be minted for price
              of .025 ETH each. We will share more in our discord
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="maps">
            <span className="head light-blue">50% SOLD</span>
            <div className="point">
              <span className="point-title">Pay It Forward</span>
              <br />
              <div className="spacing"></div>
              At 50% sold we will donate 10 ETH to Action Against Hunger because
              all children should have access to food, clean water and a
              fighting chance to live a fulfilling life.
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="maps">
            <span className="head light-purple">100% SOLD</span>
            <div className="point">
              <span className="point-title">Community Treasury</span>
              <br />
              <div className="spacing"></div>
              At sell out, 100 MyFirstPunks and 20 ETH will be used to create a
              Community Building Treasury. This will be used for giveaways and
              competitions to reward our supporters.
              <br />
              <br />
              <br />
              <span className="point-title">
                Unconventional Artist Contests $$$
              </span>
              <br />
              <div className="spacing"></div>
              Do you have a baby Picasso, a puppy that's great with pastels, a
              bird love to beat-box? Get creative with our 'Unconventional
              Artist Contests' which will have massive ETH prizes. More will be
              shared in the discord!
              <br />
              <br />
              <br />
              <span className="point-title">Let's Tell Our Story</span>
              <br />
              <div className="spacing"></div>
              As a community we will begin reaching out to journalists to share
              the incredible story of a baby selling art. Can you imagine the
              story!? We believe this will bring a lot of interest to the
              project.
              <br />
              <br />
              <br />
              <span className="point-title">Give A Little More</span>
              <br />
              <div className="spacing"></div>
              At project sell out we will donate 10 more ETH to Action
              <a
                className="hunger-text"
                href="https://www.actionagainsthunger.org/about"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Against Hunger
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RoadMap;
