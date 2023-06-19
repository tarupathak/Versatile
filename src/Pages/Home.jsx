import React from "react";
import "./style.css";
import cloth from "../Images/clothImg.svg";
import Nav from "../Components/Nav";
import { NavLink } from "react-router-dom";
import { Button, ButtonToolbar } from 'rsuite';

const Home = () => {
  return (
    <>
      <Nav />
      <div id="home">
        <div id="cloth-img">
          <NavLink to="/tiles">
            <ButtonToolbar>
              <Button appearance="ghost">Show Tiles</Button>
            </ButtonToolbar>
          </NavLink>
          <img src={cloth} alt="cloth-img" />
        </div>
        <div id="btn-flex">
          <div className="box">
            <h1>Size</h1>
            <div className="btn">
              <button>16’ 55’’</button>
              <button>16’ 55’’</button>
              <button>16’ 55’’</button>
            </div>
          </div>

          <div>
            <div className="box">
              <h1>Surface Finish</h1>
              <div className="btn">
                <button>Slate</button>
                <button>Marble</button>
                <button>Granite</button>
              </div>
            </div>
          </div>

          <div>
            <div className="box">
              <h1>Colour</h1>
              <div className="btn">
                <button>Red</button>
                <button>Green</button>
                <button>Grey</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
