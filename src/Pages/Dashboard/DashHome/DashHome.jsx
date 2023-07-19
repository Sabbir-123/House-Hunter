import { useContext } from "react";
import { AuthContext } from "../../../Components/Context/AuthContext";

import { Link } from "react-router-dom";
import Button from "../../../Components/Buttons/Button";
import { decodeToken } from "../../../hooks/decodeToken";

export default function DashHome() {
  const { user } = useContext(AuthContext);
  const token = user?.data?.accessToken;
  const decodedToken = decodeToken(token);
  console.log(decodedToken)
  const role = decodedToken?.payload?.role;
  console.log(role)
  

  return (
    <div className="h-screen">
      <h1 className="text-6xl text-center">Welcome to DashBoard</h1>
      {role === 'renter' && (
        <div className="grid justify-center pt-5">
          <Link to={"/dashboard/myBookings"}>
            <Button className="md:text-lg" sizeClass="px-[12px] py-[8px]">
              My Booking
            </Button>
          </Link>
        </div>
      )}
      {role === 'owner' && (
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
          <Link to={"/dashboard/bookingPerson"}>
            <Button className="md:text-lg" sizeClass="px-[12px] py-[8px]">
              Bookings
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
