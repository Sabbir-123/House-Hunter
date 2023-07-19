import { useContext } from "react";
import { AuthContext } from "../../../Components/Context/AuthContext";
import useOwner from "../../../hooks/useOwner";
import { Link } from "react-router-dom";
import Button from "../../../Components/Buttons/Button";


export default function DashHome() {
      const { user } = useContext(AuthContext);

  const [isOwner] = useOwner(user?.email)
  return (
    <div className="h-screen" >
      <h1 className="text-6xl text-center ">
      Welcome to DashBoard </h1>
      {
        !isOwner  &&
       
        <div className="grid justify-center pt-5">
<Link to={"/dashboard/myBookings"}>
            <Button className="md:text-lg" sizeClass="px-[12px] py-[8px]">
            My Booking
            
            </Button>
           
            </Link>
        </div>
         
      }
      {
        isOwner  &&
       
        <div className="flex justify-center pt-5 gap-9">
            <Link to={"/dashboard/myHouses"}>
            <Button className="md:text-lg" sizeClass="px-[12px] py-[8px]">
            My Houses
            
            </Button>
           
            </Link>
<Link to={"/dashboard/addhouse"}>
            <Button className="md:text-lg" sizeClass="px-[12px] py-[8px]">
            Add New House
            
            </Button>
           
            </Link>

        </div>
         
      }
     
    </div>
  )
}
