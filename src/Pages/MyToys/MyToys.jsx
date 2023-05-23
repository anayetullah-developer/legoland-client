import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import useTitle from "../../Hooks/useTitle";
import { TbSortDescending, TbSortAscending } from "react-icons/tb";

const MyToys = () => {
  useTitle("My Toys");
  const { user } = useContext(AuthContext);
  const [sorting, setSorting] = useState('descending');
  const [myToys, setMyToys] = useState([]);
  const MySwal = withReactContent(Swal);
  const swalInfo = {
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#12AEE0',
    cancelButtonColor: '#2cb367',
    confirmButtonText: 'Yes, delete it!'
  }

  const handleSorting = (sortBy) => {
    setSorting(sortBy);
  }

  useEffect(() => {
    fetch(`https://lego-marketplace-server.vercel.app/all-toys?email=${user?.email}&&sort=${sorting === 'descending' ? 'descending' : 'ascending'}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [user, myToys]);

  const handleDelete = (id) => {
    MySwal.fire(swalInfo).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://lego-marketplace-server.vercel.app/all-toys/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            const remaining = myToys.filter((toy) => toy._id !== id);
            setMyToys(remaining);
          }
        });

      }
  })
    
  };
  return (
    <div className="p-3 wc-75 mx-auto bg-tertiary-subtle rounded">
      <h1 className="text-center mt-3 mb-5">All Toys</h1>
      <div className="wc-50 mx-auto text-center mb-3">
        <h6>Sort By price:</h6>
        <TbSortDescending className="fs-3 me-3 cursor-pointer" onClick={() => handleSorting('descending')}/>
        <TbSortAscending className="fs-3 cursor-pointer" onClick={() => handleSorting('ascending')}/>
      </div>
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
            {myToys.map((toy, idx) => (
              <>
                <tr key={toy._id}>
                  <td>{idx + 1}</td>
                  <td>{toy.productName}</td>
                  <td>{toy.price}</td>
                  <td>{toy.quantity}</td>
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
