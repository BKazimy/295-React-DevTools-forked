import React from "react";
import Avatart from "./Avatar";
import Detail from "./Detail";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatart img={props.img} />
      </div>
      <div className="bottom">
        <Detail info={props.tel} />
        <Detail info={props.email} />
      </div>
    </div>
  );
}

export default Card;
