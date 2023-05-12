import React from "react";
import "./index.css";
import mainicon from "../../Assets/images/main-image.webp";

const Main = () => {
  return (
    <div className="main">
      <img src={mainicon} alt="main-icon" className="main-image"></img>
      <h1 className="main-title">Online Experiences</h1>
      <p className="main-text">
        Join unique interactive activities led by one-of-a-kind hosts-all
        without leaving home.{" "}
      </p>
    </div>
  );
};

export default Main;
