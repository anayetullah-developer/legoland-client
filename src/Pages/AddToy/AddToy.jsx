import { useContext, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { AuthContext } from "../../providers/AuthProvider";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");

  const handleCategory = (e) => {
    setCategory(e.target.value)
  }

  const handleSubCategory = (e) => {
    setSubCategory(e.target.value)
  }
  const handleAddItem = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = user?.email;
    const name = user?.displayName;
    const url = user?.photoURL;
    const price = form.price.value;
    const description =  form.description.value;
    const details =  form.details.value;
    const age =  form.age.value;
    const brand =  form.brand.value;
    const color = form.color.value;
    const material = form.material.value;
    const rating = form.rating.value;
    const weight = form.weight.value;
    const sellerName = form.sellerName.value;
    const country = form.country.value;
    // const category =  form.category.value;
    // const subcategory =  form.subCategory.value;
    console.log(name, email);

    const toyInfo = {
      email, name, url, price, description, details, age, brand, color, material, rating, weight, sellerName, country, category, subCategory
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
        console.log(result);
        if (result.insertedId) {
          alert("Inserted Successfully");
        }
      });
  };

  return (
    <div className="container">
      <h1 className="text-center mt-3 mb-5">Add a toy</h1>
      <Form onSubmit={handleAddItem}>
        <Row>
          <Col md={4} sm={6}>
            <Form.Control
              type="text"
              name="name"
              placeholder="Name"
              defaultValue={user?.displayName}
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
              name="description"
              placeholder="Description"
              className="pt-2 pb-2 pe-2 ps-4 rounded-pill mb-3"
            />
          </Col>
        </Row>
        <Row>
          <Col md={4} sm={6}>
            <Form.Select
              aria-label="Default select example"
              className="pt-2 pb-2 pe-2 ps-4 rounded-pill mb-3"
              onChange={handleCategory}
            >
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
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
              type="text"
              name="details"
              placeholder="Detail Description"
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
            <Form.Control
              type="url"
              placeholder="Photo Url"
              name="url"
              defaultValue={user?.photoURL}
              className="pt-2 pb-2 pe-2 ps-4 rounded-pill mb-3"
            />
          </Col>
          <Col md={4} sm={6}>
            <Form.Control
              type="text"
              name="sellerName"
              placeholder="Seller name"
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
              name="brand"
              placeholder="Brand"
              className="pt-2 pb-2 pe-2 ps-4 rounded-pill mb-3"
            />
          </Col>
        </Row>
        <Row>
          <Col md={4} sm={6}>
            <Form.Control
              type="text"
              name="age"
              placeholder="Age Range"
              className="pt-2 pb-2 pe-2 ps-4 rounded-pill mb-3"
            />
          </Col>
          <Col md={4} sm={6}>
            <Form.Control
              type="text"
              name="material"
              placeholder="Material"
              className="pt-2 pb-2 pe-2 ps-4 rounded-pill mb-3"
            />
          </Col>
          <Col md={4} sm={6}>
            <Form.Control
              type="text"
              name="weight"
              placeholder="Weight"
              className="pt-2 pb-2 pe-2 ps-4 rounded-pill mb-3"
            />
          </Col>
        </Row>
        <Row>
          <Col md={6} sm={6}>
            <Form.Control
              type="text"
              name="country"
              placeholder="Country Origin"
              className="pt-2 pb-2 pe-2 ps-4 rounded-pill mb-3"
            />
          </Col>
          <Col md={6} sm={6}>
            <Form.Control
              type="text"
              name="color"
              placeholder="Color"
              className="pt-2 pb-2 pe-2 ps-4 rounded-pill mb-3"
            />
          </Col>
        </Row>
        <button className="btn btn-solid-secondary d-block wt-50 mx-auto">
          Add Toy
        </button>
      </Form>
    </div>
  );
};

export default AddToy;
