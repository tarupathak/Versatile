import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import OtpPopUp from "./OtpPopUp";


const PhonePopup = ({closeModal, openOtp}) => {
  
  return (
    <>
      <div className="modal-wrapper" onClick={closeModal}></div>
      <div className="modal-container">
        <h2>Get Catalogue Access</h2>
        <p id="text">Enter your mobile number to access your catalogue.</p>
        <div className="inputBox">
          <input type="number" placeholder="Enter mobile number" required />
        </div>
        {/* <NavLink to={"/otp"}> */}
        <button className="model-btn" onClick={openOtp}>
          Get OTP
        </button>
        {/* </NavLink> */}
      </div>

    </>
  );
};

export default PhonePopup;
