import { useContext, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";


const AddToy = () => {
  const { user } = useContext(AuthContext);
  const [subCategory, setSubCategory] = useState("");
  const MySwal = withReactContent(Swal);
  const handleSubCategory = (e) => {
    setSubCategory(e.target.value)
  }
  const handleAddItem = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = user?.email;
    const productName = form.productName.value;
    const url = form.url.value;
    const price = form.price.value;
    const description =  form.description.value;
    const quantity = form.quantity.value;
    const color = form.color.value;
    const rating = form.rating.value;
    const sellerName = user?.displayName;
    // const category =  form.category.value;
    // const subcategory =  form.subCategory.value;
    
    const toyInfo = {
      email, productName, url, price, description, color, rating, sellerName, subCategory, quantity
    };

    fetch("http://localhost:5005/addToy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toyInfo),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          MySwal.fire({
            title: <p>Item added successfully</p>,
            icon: "success",
          });
        }
      });
  };

  return (
    <div className="container bg-secondary-subtle p-5 rounded-3">
      <h1 className="text-center mt-3 mb-5">Add a toy</h1>
      <Form onSubmit={handleAddItem}>
        <Row>
          <Col md={4} sm={6}>
            <Form.Control
              type="text"
              name="productName"
              required
              placeholder="Name"
              className="pt-2 pb-2 pe-2 ps-4 rounded-pill mb-3"
            />
          </Col>
          <Col md={4} sm={6}>
            <Form.Control
              type="text"
              name="price"
              required
              placeholder="Price"
              className="pt-2 pb-2 pe-2 ps-4 rounded-pill mb-3"
            />
          </Col>
          <Col md={4} sm={6}>
            <Form.Control
              type="text"
              name="color"
              required
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
              required
              placeholder="Available Quantity"
              className="pt-2 pb-2 pe-2 ps-4 rounded-pill mb-3"
            />
          </Col>
          <Col md={4} sm={6}>
            <Form.Select
              required
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
            required
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
              required
              name="rating"
              placeholder="Rating"
              className="pt-2 pb-2 pe-2 ps-4 rounded-pill mb-3"
            />
          </Col>
          <Col md={4} sm={6}>
            <Form.Control
              type="text"
              name="sellerName"
              required
              defaultValue={user?.displayName}
              placeholder="Seller name"
              className="pt-2 pb-2 pe-2 ps-4 rounded-pill mb-3"
            />
          </Col>
        </Row>
    
        <Row>
          <Col>
            <textarea className="form-control wc-50 mx-auto p-md-5 p-4" required name="description" id="" cols="30" rows="2" placeholder="Write product description in details"></textarea>
          </Col>
        </Row>
        <button className="btn btn-solid-secondary d-block wt-50 mx-auto mt-3">
          Add Toy
        </button>
      </Form>
    </div>
  );
};

export default AddToy;
