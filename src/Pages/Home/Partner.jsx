import { Card, Col, Row } from "react-bootstrap";
import brand1 from "../../assets/brands/1.png"
import brand2 from "../../assets/brands/2.png"
import brand3 from "../../assets/brands/3.png"
import brand4 from "../../assets/brands/4.png"
import brand5 from "../../assets/brands/5.png"

const Partner = () => {
  return (
    <div className="container my-5 py-5 text-center text-md-start">
      <Row>
        <Col md={6} className="pe-md-4">
          <h5 className="uppercase text-uppercase mb-2">ourt Clients</h5>
          <h1 className="carousel-heading">Meet our top clients & partners</h1>
        </Col>
        <Col md={6} className="mt-md-0 mt-3">
          <p className="fs-5">
            We appreciate your trust greatly. Meet our regular clients &
            partners who choose us as their kids’ products supplier, and whom we
            are happy to work with.
          </p>
          <p className="fs-5">
            To become an affiliate, please subscribe and/or contact our sales
            team for further instructions. Welcome to Juno!
          </p>
        </Col>
      </Row>
      <div className="d-md-flex justify-content-between mt-5">
        <img src={brand1} alt="" className="rounded-circle" style={{height: "150px"}} />
        <img src={brand2} alt="" className="rounded-circle" style={{height: "150px"}} />
        <img src={brand3} alt="" className="rounded-circle" style={{height: "150px"}} />
        <img src={brand4} alt="" className="rounded-circle" style={{height: "150px"}} />
        <img src={brand5} alt="" className="rounded-circle" style={{height: "150px"}} />
      </div>
    </div>
  );
};

export default Partner;
