import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../Components/Context/AuthContext";
import { decodeToken } from "../../../hooks/decodeToken";
import BookingDetails from "./BookingDetails";


export default function MyBookings() {
    const { user } = useContext(AuthContext);
    const token = user?.data?.accessToken;
    const decodedToken = decodeToken(token);
    console.log(decodedToken);
    const role = decodedToken?.payload?.role;
    const email = decodedToken?.payload?.userEmail;
    console.log(role, email);
  
    const url = `https://house-hunter-server-phi.vercel.app/api/v1/renters/bookings/${email}`;
    const { data: bookings = [] } = useQuery({
      queryKey: [email],
      queryFn: async () => {
        const res = await fetch(url, {
          method: 'GET', 
          headers: {
           
          },
        });
        const data = await res.json();
        return data.data;
      },
    });
  
  return (
    <>
        <div>
          <h1 className="text-4xl text-center">My Houses</h1>
          <div className="mx-5">
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th></th>
                   
                    <th>House Id</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings?.map((singleHouse, i) => (
                     <BookingDetails singleHouse={singleHouse} key={i}></BookingDetails>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
  )
}
