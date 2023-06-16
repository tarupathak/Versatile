import React from "react";

const Application = ({closeModal}) => {
  return (
    <>
      <div className="modal-wrapper" onClick={closeModal}></div>
      <div className="modal-container">
        <h2>STAY TUNED</h2>
        <p id="text">For upcoming events that will be happening soon!</p>
        <button className="model-btn" onClick={closeModal}>
          Close
        </button>
      </div>
    </>
  );
};

export default Application;
