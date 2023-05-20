import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../assets/banner/1.jpg";
import img2 from "../../assets/banner/2.jpg";
import img3 from "../../assets/banner/3.jpg";
import img4 from "../../assets/banner/4.jpg";
const Slider = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item className="carousel-bg">
          <div>
            <img
              className="d-block w-100 carousel-image"
              src={img4}
              alt="First slide"
            />
            <div className="position-absolute top-0 start-0 overlay d-block w-100 h-100">hi</div>
          </div>
          <Carousel.Caption className="top-25 z-index">
              <h2 className="carousel-heading">
                Get a bonus after the first order
              </h2>
              <p className="carousel-desc">
                The best offer for our regular customer including free shipping
                on your birthday
              </p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-bg">
          <div>
            <img
              className="d-block w-100 carousel-image"
              src={img2}
              alt="Second slide"
            />
            <div className="position-absolute top-0 start-0 overlay d-block w-100 h-100">hi</div>
          </div>
          <Carousel.Caption className="top-25 z-index">
            <h2 className="carousel-heading">
              Pick the best toy for your kids
            </h2>
            <p className="carousel-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-bg">
         <div> 
          <img
            className="d-block w-100 carousel-image"
            src={img3}
            alt="Third slide"
          />
           <div className="position-absolute top-0 start-0 overlay d-block w-100 h-100">hi</div></div>
          <Carousel.Caption className="top-25 z-index">
            <h2 className="carousel-heading">Third slide label</h2>
            <p className="carousel-desc">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
