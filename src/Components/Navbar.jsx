import React, { useState } from "react";
import logo from "../Images/logo.svg";
import "./Components.css";
import { useNavigate } from "react-router-dom";
import { Modal, ButtonToolbar, Button, Input } from "rsuite";
import OtpInput from "react-otp-input";

const Navbar = () => {
  const navHandler = useNavigate();
  const [otp, setOtp] = useState("");
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
    return setOpen(true), setSize(value), setShow(false);
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
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={4}
                  renderSeparator={<span>-</span>}
                  renderInput={(props) => <input {...props} />}
                  inputStyle={{
                    width: "4rem",
                    height: "4rem",
                    margin: "0 0.5rem",
                    fontSize: "2rem",
                    borderRadius: "4px",
                    border: "1px solid rgba(0,0,0,.3)",
                  }}
                />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={handleExit} appearance="primary">
                Verify OTP
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
