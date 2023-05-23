import { Card, Col, Row } from "react-bootstrap";
import img1 from "../../assets/testimonials/1.jpg";
const Testimonial = () => {
  return (
    <div className="testimonial-bg py-md-4 my-5">
      <div className="container my-5 py-5">
        <Row>
          <Col
            md={7}
            className="d-md-flex justify-content-around align-items-center"
          >
            <Card style={{ width: "18rem" }} className="mt-4 py-md-5 mx-auto">
              <Card.Body className="p-md-4">
                <Card.Text className="fs-5">
                  Not only do the toys make our children squeal with joy, but
                  the sales team is awesome!
                </Card.Text>
                <div className="d-flex flex-column flex-md-row align-items-center mt-5">
                    <img src={img1} alt="" className="rounded-circle me-md-2" style={{width: "70px", height: "70px"}}/>
                  <div>
                    <h5>George Boston</h5>
                    <p>CEO, Monster Toy</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }} className="mt-4 py-md-5 mx-auto">
              <Card.Body className="p-md-4">
                <Card.Text className="fs-5">
                  What a great store for the entire family! My kids love this
                  place because of the toys!
                </Card.Text>
                <div className="d-flex flex-column flex-md-row align-items-center mt-5">
                    <img src={img1} alt="" className="rounded-circle me-md-2" style={{width: "70px", height: "70px"}}/>
                  <div>
                    <h5>George Boston</h5>
                    <p>CEO, Monster Toy</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={5} className="ps-md-5 mt-5 text-center text-md-start">
            <h5 className="uppercase text-uppercase text-white">
              Testimonials
            </h5>
            <h1 className="text-white">What Our Clients Say About Us</h1>
            <p className="fs-5 text-white">
              We appreciate your kind and honest feedback and invite you to our
              amazing store.
            </p>
            <button className="btn-solid-primary">About Us</button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Testimonial;
