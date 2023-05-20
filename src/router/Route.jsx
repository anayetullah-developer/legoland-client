import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Blogs from "../Pages/Blogs/Blogs";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
          path: "blogs",
          element: <Blogs/>
        }
      ]
    },
    {
      path: "login",
      element: <Login/>
    },
    {
      path: "register",
      element: <Register/>
    }
  ]);

  export default router;