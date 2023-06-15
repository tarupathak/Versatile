import React from "react";
import Nav from "../Components/Nav";
import "./style.css";
import sound from "../Images/sound.svg";
import box from "../Images/box.svg";
import { tileItems } from "../Components/TileItems";

const Tiles = () => {
  return (
    <>
      <Nav />
      <div id="tiles-page">
        <div className="fles-container">
          <div className="option-flex">
            <p id="size">Size</p>
            <div className="btn-flex">
              <button>16'55''</button>
              <button>16'55''</button>
              <button>16'55''</button>
            </div>
          </div>
          <div className="line"></div>
          <div className="option-flex">
            <p id="surface">Surface Finish</p>
            <div className="btn-flex">
              <button>Slate</button>
              <button>Granite</button>
              <button>Marble</button>
            </div>
          </div>
          <div className="line"></div>
          <div className="option-flex">
            <p id="color">Colour</p>
            <div className="btn-flex">
              <button>Red</button>
              <button>Green</button>
              <button>Gray</button>
            </div>
          </div>
        </div>
        {tileItems.map((item) => {
          return (
            <div id="tiles-container">
              <div id="tiles-image">
                <img src={item.photo} alt="tile1" />
              </div>
              <div id="text-part">
                <div>
                  <div id="tile-text">
                    <h3>{item.head}</h3>
                    <p>{item.tail}</p>
                  </div>
                  <div className="btn-tile">
                    <button>{item.btn1}</button>
                    <button>{item.btn2}</button>
                  </div>
                </div>
                <div id="side-flex">
                  <div>
                    <img src={sound} alt="sound" />
                  </div>
                  <div>
                    <img src={box} alt="box" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        ;
      </div>
    </>
  );
};

export default Tiles;
