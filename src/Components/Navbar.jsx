import React, { useState } from "react";
import logo from "../Images/logo.svg";
import "./Components.css";
import { useNavigate } from "react-router-dom";
// import PhonePopup from "./PhonePopup";
// import OtpPopUp from "./OtpPopUp";
import { Modal, ButtonToolbar, Button, Input } from "rsuite";
const Navbar = () => {
  const navHandler = useNavigate();
  function handleSubmit() {
    return navHandler("/catalogue"), handleOpen("md");
  }
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(true);
  const [size, setSize] = useState();
  const handleShow = () => {
    return setOpen(false), setShow(true);
  };
  const handleOpen = (value) => {
    return setOpen(true),setSize(value), setShow(false);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleExit = () => {
    return setShow(false);
  };
  return (
    <>
      <nav>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div id="cata">
          <ButtonToolbar>
            <Button size="lg" onClick={handleSubmit}>
              CATALOGUE
            </Button>
          </ButtonToolbar>
          <Modal size={size} open={open} onClose={handleClose}>
            <Modal.Header>
              <Modal.Title>Get Catalogue Access</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p> Enter your mobile number to access your catalogue.</p>
              <Input className="my-input" type="number" />
            </Modal.Body>
            <Modal.Footer>
              <ButtonToolbar>
                <Button onClick={handleShow} appearance="primary">
                  Get OTP
                </Button>
              </ButtonToolbar>
            </Modal.Footer>
          </Modal>
          <Modal size={size} open={show} onClose={handleExit}>
            <Modal.Header>
              <Modal.Title>Get Catalogue Access</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                Enter OTP to validate your mobile number and get your catalogue
                access.
              </p>
              <div id="otp-box">
                <Input className="my-input" type="number" />
                <Input className="my-input" type="number" />
                <Input className="my-input" type="number" />
                <Input className="my-input" type="number" />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={handleExit} appearance="primary">
                Verify OTP
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        {/* {show && !isOtpModal && <PhonePopup openOtp={handleOptToggle} />}
        {isOtpModal && <OtpPopUp closePop={handleAllClose} />} */}
      </nav>
    </>
  );
};
export default Navbar;
