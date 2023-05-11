import React from "react";
import "./index.css";

const Cardcontent = (props) => {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <>
      <div className= "cards" >
        <div className="card">
          {badgeText && <div className="card--badge">{badgeText}</div>}
          <div className="cardDetails">
            <img src={props.img} alt="cardimage" className="cardimage" />
            <img src={props.staricon} alt="star-icon" className="star-icon" />
            &nbsp;
            <span>{props.rating}</span>
            <span className="light-text">({props.reviewCount}) .USA</span>{" "}
            <br></br>
            <p>{props.title}</p>
            <p>
              <strong>From $ {props.price}</strong> / person
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cardcontent;
