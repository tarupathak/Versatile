import React, { useState } from "react";
import Nav from "../Components/Nav";
import "./style.css";
import sound from "../Images/sound.svg";
import box from "../Images/box.svg";
import { tileItems } from "../Components/TileItems";
import { Modal, ButtonToolbar, Button, Placeholder } from "rsuite";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CarousalImg1 from "../Images/carousalImg1.svg";

const Tiles = () => {
  const [open, setOpen] = React.useState(false);
  const [show, setShow] = useState(false);
  const [size, setSize] = React.useState();

  const handleShow = (value) => {
    setShow(true);
    setSize(value);
  };
  const handleOpen = (value) => {
    setSize(value);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const handleExit = () => setShow(false);
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
                  <div onClick={() => handleOpen("sm")}>
                    <img src={sound} alt="sound" />
                  </div>

                  <div onClick={() => handleShow("sm")}>
                    <img src={box} alt="box" />
                  </div>
                  <Modal size={size} open={open} onClose={handleClose}>
                    <Modal.Header>
                      <Modal.Title className="title">Live Images</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Carousel
                        swipeable
                        showArrows={true}
                        showStatus={false}
                        showIndicators={false}
                        dynamicHeight
                        showThumbs={false}
                      >
                        <div>
                          <img src={CarousalImg1} />
                        </div>
                        <div>
                          <img src={CarousalImg1} />
                        </div>
                      </Carousel>
                    </Modal.Body>
                  </Modal>
                  <Modal size={size} open={show} onClose={handleExit}>
                    <Modal.Header>
                      <Modal.Title className="title">Applications</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Carousel
                        swipeable
                        showStatus={false}
                        showIndicators={false}
                        dynamicHeight
                        showThumbs={false}
                      >
                        <div>
                          <img src={CarousalImg1} />
                        </div>
                        <div>
                          <img src={CarousalImg1} />
                        </div>
                      </Carousel>
                    </Modal.Body>
                  </Modal>
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
