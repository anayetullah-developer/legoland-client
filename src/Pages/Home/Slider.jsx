import { Carousel } from "react-bootstrap";
// import img1 from "../../assets/banner/1.jpg";
import img2 from "../../assets/banner/1.jpg";
import img3 from "../../assets/banner/2.jpg";
import img4 from "../../assets/banner/3.jpg";
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
          <Carousel.Caption className="top-25 z-index wc-50 mx-auto">
              <h2 className="carousel-heading">
                Get a bonus after the first order
              </h2>
              <p className="carousel-desc">
                The best offer for our regular customer including free shipping
                on your birthday
              </p>
              <button className="btn btn-solid-primary">Get Bonus</button>
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
          <Carousel.Caption className="top-25 z-index wc-50 mx-auto">
            <h2 className="carousel-heading">
              Pick the best toy for your kids
            </h2>
            <p className="carousel-desc">
              We offer a premium service whether you are shopping at one of our flagship stores or via online
            </p>
            <button className="btn btn-solid-primary">Discover Now</button>
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
          <Carousel.Caption className="top-25 z-index wc-50 mx-auto">
            <h2 className="carousel-heading">We instruct you how to prepare</h2>
            <p className="carousel-desc">
            Get ready to tackle any challenge with our comprehensive instruction guide. From DIY projects to outdoor adventures, we've got you covered</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
