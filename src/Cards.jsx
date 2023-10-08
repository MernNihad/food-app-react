import React, { Suspense, lazy, useState } from "react";
import InsideCard from "./InsideCard";

function Cards(props) {
  const { image, para, title } = props;


  return (
    <div className="card">
      <div className="container">
        <img src={image} alt="" />
      </div>
      <div className="title">
        <h2>{title}</h2>
        <p>{para}</p>
        <InsideCard/>
      </div>
    </div>
  );
}

export default Cards;
