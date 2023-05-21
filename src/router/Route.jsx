import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home";
import AddToy from "../Pages/AddToy/AddToy";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import SingleToy from "../Pages/AllToys/SingleToy";
import UpdateToy from "../Pages/Update/UpdateToy";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "add-toy",
          element: <AddToy/>
        },
        {
          path: "all-toys",
          element: <AllToys/>
        },
        {
          path: "all-toys/:id",
          element: <SingleToy/>,
          loader: ({params}) => fetch(`http://localhost:5005/all-toys/${params.id}`)
        },
        {
          path: "my-toys",
          element: <MyToys/>,
        },
        {
          path: "my-toys/:id",
          element: <UpdateToy/>,
          loader: ({params}) => fetch(`http://localhost:5005/all-toys/${params.id}`)
        },
        {
          path: "blogs",
          element: <Blogs/>
        },
        {
          path: "login",
          element: <Login/>
        },
        {
          path: "register",
          element: <Register/>
        }
      ]
    }
  ]);

  export default router;