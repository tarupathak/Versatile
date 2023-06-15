import React, { useEffect, useState } from "react";
import PhonePopup from "../Components/PhonePopup";
import Navbar from "../Components/Navbar";
import Card from "../Components/Card";
import "./style.css";
import OtpPopUp from "../Components/OtpPopUp";

const Catalogue = () => {
  // const [show, setShow] = useState(false);

  // const [isOtpModal, setIsOtpModal] = useState(false);

  // const handleOptToggle = () => {
  //   setIsOtpModal(true);
  // };
  // const handleAllClose = () => {
  //   setIsOtpModal(false);
  //   setShow(false);
  // };

  return (
    <div>
      <Navbar />
      {/* <div onClick={() => setShow(true)}> */}
        <Card />
      {/* </div> */}
      {/* {(show && !isOtpModal) && <PhonePopup openOtp={handleOptToggle} />}
      {isOtpModal && <OtpPopUp closePop={handleAllClose} />} */}
    </div>
  );
};

export default Catalogue;
