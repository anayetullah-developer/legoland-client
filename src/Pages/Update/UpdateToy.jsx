import { Col, Form, Row } from "react-bootstrap";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext, useState } from "react";

const UpdateToy = () => {
  const { user } = useContext(AuthContext);
  const [subCategory, setSubCategory] = useState("");
  
  const handleSubCategory = (e) => {
    setSubCategory(e.target.value)
  }
    return (
        <div className="container bg-secondary-subtle p-5 rounded-3">
      <h1 className="text-center mt-3 mb-5">Add a toy</h1>
      <Form onSubmit={handleAddItem}>
        <Row>
          <Col md={4} sm={6}>
            <Form.Control
              type="text"
              name="productName"
              placeholder="Name"
              className="pt-2 pb-2 pe-2 ps-4 rounded-pill mb-3"
            />
          </Col>
          <Col md={4} sm={6}>
            <Form.Control
              type="text"
              name="price"
              placeholder="Price"
              className="pt-2 pb-2 pe-2 ps-4 rounded-pill mb-3"
            />
          </Col>
          <Col md={4} sm={6}>
            <Form.Control
              type="text"
              name="color"
              placeholder="Color"
              className="pt-2 pb-2 pe-2 ps-4 rounded-pill mb-3"
            />
          </Col>
        </Row>
        <Row>
          <Col md={4} sm={6}>
          <Form.Control
              type="number"
              name="quantity"
              placeholder="Available Quantity"
              className="pt-2 pb-2 pe-2 ps-4 rounded-pill mb-3"
            />
          </Col>
          <Col md={4} sm={6}>
            <Form.Select
              aria-label="Default select example"
              className="pt-2 pb-2 pe-2 ps-4 rounded-pill mb-3"
              onChange={handleSubCategory}
            >
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Col>
          <Col md={4} sm={6}>
          <Form.Control
              type="url"
              placeholder="Photo Url"
              name="url"
              className="pt-2 pb-2 pe-2 ps-4 rounded-pill mb-3"
            />
          </Col>
        </Row>
        <Row>
          <Col md={4} sm={6}>
            <Form.Control
              type="email"
              name="email"
              defaultValue={user?.email}
              placeholder="Seller Email"
              className="pt-2 pb-2 pe-2 ps-4 rounded-pill mb-3"
            />
          </Col>
          <Col md={4} sm={6}>
            <Form.Control
              type="text"
              name="rating"
              placeholder="Rating"
              className="pt-2 pb-2 pe-2 ps-4 rounded-pill mb-3"
            />
          </Col>
          <Col md={4} sm={6}>
            <Form.Control
              type="text"
              name="sellerName"
              defaultValue={user?.displayName}
              placeholder="Seller name"
              className="pt-2 pb-2 pe-2 ps-4 rounded-pill mb-3"
            />
          </Col>
        </Row>
    
        <Row>
          <Col>
            <textarea className="form-control w-50 mx-auto p-5" name="description" id="" cols="30" rows="2" placeholder="Write product description in details"></textarea>
          </Col>
        </Row>
        <button className="btn btn-solid-secondary d-block wt-50 mx-auto mt-3">
          Add Toy
        </button>
      </Form>
    </div>
    );
};

export default UpdateToy;