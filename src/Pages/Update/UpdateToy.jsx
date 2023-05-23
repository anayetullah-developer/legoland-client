import { Col, Form, Row } from "react-bootstrap";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import useTitle from "../../Hooks/useTitle";

const UpdateToy = () => {
  useTitle("Update Toy")
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const singleToy  = useLoaderData()
  const {_id, productName, url, price, description, color, rating, quantity } = singleToy;
  const {user} = useContext(AuthContext);
  const [subCategory, setSubCategory] = useState("");

  const handleSubCategory = (e) => {
    setSubCategory(e.target.value)
  }
  const handleUpdateItem = (e) => {
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
    // const category =  form.category.defaultValue;
    // const subcategory =  form.subCategory.defaultValue;
  
    const toyInfo = {
      email, productName, url, price, description, color, rating, sellerName, subCategory, quantity
    };

    fetch(` https://lego-marketplace-server.vercel.app/updateToy/${_id}`, {
      method: "PATCH",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(toyInfo)
    })
    .then(res => res.json())
    .then(result => {
      if(result.modifiedCount > 0) {
        MySwal.fire({
          title: <p>Item updated successfully</p>,
          icon: "success",
        });

        navigate ("/my-toys")
      }
    })
  
  };
 
    return (
        <div className="container bg-secondary-subtle p-5 rounded-3">
      <h1 className="text-center mt-3 mb-5">Update a toy</h1>
      <Form onSubmit={handleUpdateItem}>
        <Row>
          <Col md={4} sm={6}>
            <Form.Control
              type="text"
              name="productName"
              defaultValue={productName}
              placeholder="Name"
              className="pt-2 pb-2 pe-2 ps-4 rounded-pill mb-3"
            />
          </Col>
          <Col md={4} sm={6}>
            <Form.Control
              type="number"
              name="price"
              defaultValue={price}
              placeholder="Price"
              className="pt-2 pb-2 pe-2 ps-4 rounded-pill mb-3"
            />
          </Col>
          <Col md={4} sm={6}>
            <Form.Control
              type="text"
              name="color"
              defaultValue={color}
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
              defaultValue={quantity}
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
               <option>Select a sub category</option>
              <option value="cars">cars</option>
              <option value="figures">Figures</option>
              <option value="architecture">Architecture</option>
            </Form.Select>
          </Col>
          <Col md={4} sm={6}>
          <Form.Control
              type="url"
              placeholder="Photo Url"
              defaultValue={url}
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
              value={user?.email}
              placeholder="Seller Email"
              className="pt-2 pb-2 pe-2 ps-4 rounded-pill mb-3"
            />
          </Col>
          <Col md={4} sm={6}>
            <Form.Control
              type="text"
              name="rating"
              defaultValue={rating}
              placeholder="Rating"
              className="pt-2 pb-2 pe-2 ps-4 rounded-pill mb-3"
            />
          </Col>
          <Col md={4} sm={6}>
            <Form.Control
              type="text"
              name="sellerName"
              value={user?.displayName}
              placeholder="Seller name"
              className="pt-2 pb-2 pe-2 ps-4 rounded-pill mb-3"
            />
          </Col>
        </Row>
    
        <Row>
          <Col>
            <textarea className="form-control w-50 mx-auto p-5" defaultValue={description} name="description" id="" cols="30" rows="2" placeholder="Write product description in details"></textarea>
          </Col>
        </Row>
        <button className="btn btn-solid-secondary d-block wt-50 mx-auto mt-3">
          Update Toy
        </button>
      </Form>
    </div>
    );
};

export default UpdateToy;