/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useOwner from "../../hooks/useOwner";
import { AuthContext } from "../../Components/Context/AuthContext";



const OwnerRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const [isOwner, isOwnerLoading]= useOwner(user?.email)
    const location = useLocation();

    if(loading
         || 
         isOwnerLoading
         ){
        return (
            <div className="grid justify-center">
        <div className="loader text-center ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64"></div>
      </div>
        )
    }

    if (user
         && isOwner
         ){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default OwnerRoute;
