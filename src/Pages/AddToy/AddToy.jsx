import { Col, Form, Row } from "react-bootstrap";

const AddToy = () => {
  return (
    <div className="container">
    <h1 className="text-center mt-3 mb-5">Add a toy</h1>
      <Form>
        <Row>
          <Col md={4} sm={6}>
            <Form.Control type="text" name="name" placeholder="Name" className="pt-2 pb-2 pe-2 ps-4 rounded-pill mb-3"/>
          </Col>
          <Col md={4} sm={6}>
            <Form.Control type="text" name="price" placeholder="Price" className="pt-2 pb-2 pe-2 ps-4 rounded-pill mb-3"/>
          </Col>
          <Col md={4} sm={6}>
            <Form.Control type="text" name="description" placeholder="Description" className="pt-2 pb-2 pe-2 ps-4 rounded-pill mb-3"/>
          </Col>
        </Row>
        <Row>
          <Col md={4} sm={6}>
            <Form.Control type="text" name="category" placeholder="Category" className="pt-2 pb-2 pe-2 ps-4 rounded-pill mb-3"/>
          </Col>
          <Col md={4} sm={6}>
            <Form.Control type="text" name="sub-category" placeholder="Sub-Category" className="pt-2 pb-2 pe-2 ps-4 rounded-pill mb-3"/>
          </Col>
          <Col md={4} sm={6}>
            <Form.Control type="text" name="details" placeholder="Detail Description" className="pt-2 pb-2 pe-2 ps-4 rounded-pill mb-3"/>
          </Col>
        </Row>
        <Row>
          <Col md={4} sm={6}>
            <Form.Control type="number" name="quantity" placeholder="Available Quantity" className="pt-2 pb-2 pe-2 ps-4 rounded-pill mb-3"/>
          </Col>
          <Col md={4} sm={6}>
            <Form.Control type="url" placeholder="Photo Url" name="url" className="pt-2 pb-2 pe-2 ps-4 rounded-pill mb-3"/>
          </Col>
          <Col md={4} sm={6}>
            <Form.Control type="text" name="seller-name" placeholder="Seller name" className="pt-2 pb-2 pe-2 ps-4 rounded-pill mb-3"/>
          </Col>
        </Row>
        <Row>
          <Col md={4} sm={6}>
            <Form.Control type="email" name="email" placeholder="Seller Email" className="pt-2 pb-2 pe-2 ps-4 rounded-pill mb-3"/>
          </Col>
          <Col md={4} sm={6}>
            <Form.Control type="text" name="rating" placeholder="Rating" className="pt-2 pb-2 pe-2 ps-4 rounded-pill mb-3"/>
          </Col>
          <Col md={4} sm={6}>
            <Form.Control type="text" name="brand" placeholder="Brand" className="pt-2 pb-2 pe-2 ps-4 rounded-pill mb-3"/>
          </Col>
        </Row>
        <Row>
          <Col md={4} sm={6}>
            <Form.Control type="text" name="age" placeholder="Age Range" className="pt-2 pb-2 pe-2 ps-4 rounded-pill mb-3"/>
          </Col>
          <Col md={4} sm={6}>
            <Form.Control type="text" name="material" placeholder="Material" className="pt-2 pb-2 pe-2 ps-4 rounded-pill mb-3"/>
          </Col>
          <Col md={4} sm={6}>
            <Form.Control type="text" name="weight" placeholder="Weight" className="pt-2 pb-2 pe-2 ps-4 rounded-pill mb-3"/>
          </Col>
        </Row>
        <Row>
          <Col md={6} sm={6}>
            <Form.Control type="text" name="country" placeholder="Country Origin" className="pt-2 pb-2 pe-2 ps-4 rounded-pill mb-3"/>
          </Col>
          <Col md={6} sm={6}>
            <Form.Control type="text" name="color" placeholder="Color" className="pt-2 pb-2 pe-2 ps-4 rounded-pill mb-3"/>
          </Col>
        </Row>
        <button className="btn btn-solid-secondary d-block wt-50 mx-auto">Add Toy</button>
      </Form>
      
    </div>
  );
};

export default AddToy;
