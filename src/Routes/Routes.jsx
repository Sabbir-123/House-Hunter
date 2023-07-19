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
          element: <BookingModal/>,
          loader: ({params})=>fetch(`https://house-hunter-server-phi.vercel.app/api/v1/owners/signleHouse/${params.id}`)
        }
        
      ],
      
    },{
      path: '/dashboard',
      element: <Dashboard/>,
      errorElement: <ErrorPage/>,
      children: [
          {
          path: '/dashboard',
          element: <DashHome/>
      },
          {
          path: '/dashboard/bookings',
          element: <MyBookings/>
      },
      
      //     {
      //     path: '/dashboard/report',
      //     element: <AdminRoute><ShowReport></ShowReport></AdminRoute>
      // },
      //     {
      //     path: '/dashboard/addHouse',
      //     element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
      // }
  
  ]
  }
    
  ]);
  
  export default routes;
  