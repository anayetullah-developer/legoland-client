import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
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