import React from "react";
import pdf from "../Images/pdf.svg";
import { cardItems } from "./CardItems";
import "./Components.css";

const Card = () => {
  return (
    <>
      <div id="container">
        {cardItems.map(({ id, photo, head, tail }) => {
          return (
            <div key={id} className="item">
              <div id="pdf-img">
                <img src={photo} alt="File-image" />
              </div>
              <h3>{head}</h3>
              <p>{tail}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card;
