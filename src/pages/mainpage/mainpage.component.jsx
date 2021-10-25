import React from "react";

import Header from "../../components/header/header.component";
import Img from "../../components/img/img.component";
import Launch from "../../components/launch/launch.component";
import Holder from "../../components/holder/Holder";
import IntroVideo from "../../components/introvideo/IntroVideo";

import "./mainpage.styles.css";

const MainPage = () => (
  <div className="mainpage">
    <Header />
    <IntroVideo />
    <Launch />
    <Holder />
    <Img />
  </div>
);

export default MainPage;
