import React from "react";

const Header = props => (
  <div className="container text-center" id="header-container">
    <h1 id="logo">
      <b>Drunky Clicky </b>
    </h1>
    <br />
    <h5 className="subtitle">How to play:</h5>
    <br />
    <h5 className="subtitle">
      The images below will shuffle after each click. <br /> The goal is to
      select each image only once - while Sober! Click on an image to get
      started! Good luck!
    </h5>
  </div>
);

export default Header;
