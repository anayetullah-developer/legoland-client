import { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";

const AllToys = () => {
  useTitle("All Toys")
  const [toys, setToys] = useState([]);
  
  useEffect(() => {
    fetch(` https://lego-marketplace-server.vercel.app/toys`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);


  const handleToySearch = (e) => {
    const text = e.target.value;
    fetch(` https://lego-marketplace-server.vercel.app/productSearch/${text}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }

  return (
    <div className="p-3 rounded wc-75 mx-auto">
      <h1 className="text-center mt-3 mb-5">All Toys</h1>
      <div className="">
        <div className="wc-50 mx-auto mb-3">
          <Form className="d-flex">
            <Form.Control
            onChange={handleToySearch}
              type="search"
              placeholder="Search product by name"
              className="me-2 p-2 rounded"
              aria-label="Search"
            />
            <Button variant="outline-success" onClick={handleToySearch}>Search</Button>
          </Form>
        </div>
        <Table responsive="md" className="table-striped">
          <thead>
            <tr>
              <th>No</th>
              <th>Toy Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Seller Name</th>
              <th>Sub Category</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {toys.map((toy, idx) => (
              <>
                <tr key={toy._id}>
                  <td>{idx + 1}</td>
                  <td>{toy.productName}</td>
                  <td>{toy.price}</td>
                  <td>{toy.quantity}</td>
                  <td>{toy.sellerName}</td>
                  <td>{toy.subCategory}</td>
                  <td>
                    <Link to={`/all-toys/${toy._id}`}>
                      <button className=" btn btn-solid-secondary py-1 px-2">
                        Details
                      </button>
                    </Link>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AllToys;
