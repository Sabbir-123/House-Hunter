import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Partials/Navbar";
import Footer from "../Pages/Home/Footer";



export default function Layout() {
  return (
    <div>
      <Navbar/>
      <div className="pt-16">
        <Outlet />
      </div>
      <Footer/>
    </div>
  )
}
