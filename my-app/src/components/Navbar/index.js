import React from "react";
import Logo from "../../Assets/images/airicon.png";
import './index.css';

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <img src={Logo} alt="air-icon" className="air-icon"></img>
      </div>
    </>
  );
};

export default Navbar;
