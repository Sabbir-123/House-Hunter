import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home/Home";
import Layout from "../MainLayout/Layout";
import SignUp from "../Pages/SingUp/SignUp";
import Login from "../Pages/LogIn/Login";
import AllHouses from "../Pages/AllHouses/AllHouses";
import BookingModal from "../Pages/Home/Partials/Houses/BookingModal";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyBookings from "../Pages/Dashboard/Renters/MyBookings";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import DashHome from "../Pages/Dashboard/DashHome/DashHome";
import MyHouses from "../Pages/Dashboard/Owner/MyHouses";
import BookingPerson from "../Pages/Dashboard/Owner/BookingPerson";
import AddHouses from "../Pages/Dashboard/Owner/AddHouses";
import PrivateRoute from "./PrivateRoute/PrivateRoute";


const routes = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/signup',
          element: <SignUp/>
        }
        ,
        {
          path: '/login',
          element: <Login/>
        },
        {
          path: '/allhouses',
          element: <AllHouses/>
        }
        ,
        {
          path: `/houses/:id`,
          element: <PrivateRoute><BookingModal/></PrivateRoute>,
          loader: ({params})=>fetch(`https://house-hunter-server-phi.vercel.app/api/v1/owners/signleHouse/${params.id}`)
        }
        
      ],
      
    },{
      path: '/dashboard',
      element:<PrivateRoute> <Dashboard/></PrivateRoute>,
      errorElement: <ErrorPage/>,
      children: [
          {
          path: '/dashboard',
          element:<PrivateRoute> <DashHome/></PrivateRoute>
      },
          {
          path: '/dashboard/myBookings',
          element: <PrivateRoute><MyBookings/></PrivateRoute>
      },
          {
          path: '/dashboard/addhouse',
          element: <PrivateRoute><AddHouses/></PrivateRoute>
      },
          {
          path: '/dashboard/myHouses',
          element:<PrivateRoute><MyHouses/></PrivateRoute> 
      },
          {
          path: '/dashboard/bookings',
          element: <BookingPerson/>
      },
      
    
  ]
  }
    
  ]);
  
  export default routes;
  