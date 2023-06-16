import React from 'react'

const Live = ({closePop}) => {
  return (
    <>
    <div className="modal-wrapper" onClick={closePop}></div>
    <div className="modal-container">
      <h2>STAY TUNED</h2>
      <p id="text">For upcoming events that will be happening soon!</p>
      <button className="model-btn" onClick={closePop}>Close</button>
      </div>
    </>
  )
}

export default Live