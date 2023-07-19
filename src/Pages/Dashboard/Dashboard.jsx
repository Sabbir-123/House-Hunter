import { Outlet } from "react-router-dom";
import Footer from "../Home/Footer";
import Navbar from "../Home/Partials/Navbar";
// import useOwner from "../../hooks/useOwner";


const DashBoard = () => {

  return (
    <div>
      <Navbar></Navbar>
      <div className="pt-36">
       
          <Outlet></Outlet>
    
      </div>

      <Footer></Footer>
    </div>
  );
};

export default DashBoard;
