import React from "react";
import { NavLink } from "react-router-dom";

const OtpPopUp = ({closePop}) => {
  return (
    <>
      <div className="modal-wrapper" onClick={closePop}></div>
      <div className="modal-container">
        <h2>Get Catalogue Access</h2>
        <p id="text">
          Enter OTP to validate your mobile number and get your catalogue
          access.
        </p>
        <div className="inputBox2">
          <input type="number"  required />
          <input type="number"  required />
          <input type="number"  required />
          <input type="number"  required />
        </div>
        <button className="model-btn" onClick={closePop}>
          Verify OTP
        </button>
      </div>
    </>
  );
};

export default OtpPopUp;
