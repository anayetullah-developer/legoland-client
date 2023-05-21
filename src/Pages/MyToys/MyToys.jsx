import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5005/all-toys?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [user, myToys]);

  const handleDelete = (id) => {
    const proceed = confirm("Do you want to delete this item?");
    if (proceed) {
      fetch(`http://localhost:5005/all-toys/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            alert("Item deleted");
            const remaining = myToys.filter((toy) => toy._id !== id);
            setMyToys(remaining);
          }
        });
    }
  };
  return (
    <div className="p-3">
      <h1 className="text-center mt-3 mb-5">All Toys</h1>
      <div className="bg-tertiary-subtle rounded">
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
            {myToys.map((toy, idx) => (
              <>
                <tr key={toy._id}>
                  <td>{idx + 1}</td>
                  <td>T{toy.productName}</td>
                  <td>{toy.price}</td>
                  <td>T{toy.quantity}</td>
                  <td>{toy.sellerName}</td>
                  <td>{toy.subCategory}</td>
                  <td>
                    <Link to={`/my-toys/${toy._id}`}>
                      <button className=" btn btn-solid-secondary py-1 px-2 me-2">
                        Edit
                      </button>
                    </Link>

                    <button
                      className=" btn btn-solid-secondary py-1 px-2"
                      onClick={() => handleDelete(toy._id)}
                    >
                      Delete
                    </button>
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

export default MyToys;
