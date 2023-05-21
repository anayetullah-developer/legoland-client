import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  console.log(toys);

  useEffect(() => {
    fetch(`http://localhost:5005/toys`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  return (
    <div className="p-3 bg-tertiary-subtle rounded wc-75 mx-auto">
      <h1 className="text-center mt-3 mb-5">All Toys</h1>
      <div className="">
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
                  <td>T{toy.productName}</td>
                  <td>{toy.price}</td>
                  <td>T{toy.quantity}</td>
                  <td>{toy.sellerName}</td>
                  <td>{toy.subCategory}</td>
                  <td>
                    <Link to={`/all-toys/${toy._id}`}><button className=" btn btn-solid-secondary py-1 px-2">
                      Details
                    </button></Link>
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
