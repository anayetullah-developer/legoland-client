import { Col, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";

const SingleToy = () => {
  useTitle("Toy Details")
  const singleToy = useLoaderData();
  return (
    <div className="container">
      <Row>
        <Col md={6}>
          <div className="d-flex justify-content-center align-items-center" style={{height : "500px"}}>
            <img className="w-75" src={singleToy.url} alt="" />
          </div>
        </Col>
        <Col md={6}>
          <h1>{singleToy.productName}</h1>
          <h3 className="text-secondary product-price">$ {singleToy.price}</h3>
          <p>{singleToy.description}</p>
          <button className="btn btn-solid-primary">Add to cart</button>
          <div className="mt-4">
            <p className="mb-1"><span className="fw-bold">Quantity: </span>{singleToy.quantity}</p>
            <p className="mb-1"><span className="fw-bold">Rating: </span>{singleToy.rating}</p>
            <p className="mb-1"><span className="fw-bold">Seller Name: </span>{singleToy.sellerName}</p>
            <p className="mb-1"><span className="fw-bold">Seller Email: </span>{singleToy.email}</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SingleToy;
