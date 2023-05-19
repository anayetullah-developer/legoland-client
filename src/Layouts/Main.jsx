import { Outlet } from "react-router-dom";
import NavigationBar from "../Pages/Shared/NavigationBar/NavigationBar";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
    return (
        <>
          <NavigationBar/>
          <Outlet/>
          <Footer/>  
        </>
    );
};

export default Main;