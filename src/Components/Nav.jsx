import React from "react";
import "./Components.css";
import logo from "../Images/logo.svg";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navHandler = useNavigate();
  function handleSubmit() {
    return navHandler("/catalogue");
  }
  return (
    <>
      <nav>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div id="cata" onClick={handleSubmit}>
          CATALOGUE
        </div>
      </nav>
    </>
  );
};

export default Nav;
