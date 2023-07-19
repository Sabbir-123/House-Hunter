/* eslint-disable no-unused-vars */
import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Components/Context/AuthContext';
import axios from 'axios';

const Login = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [loginError, setLoginError] = useState('');
  const [credentials, setCredentials] = useState({
    email: '' ,
    password: '' 
  });

  const {loading, error, dispatch} = useContext(AuthContext)
  const location = useLocation();
  const navigate = useNavigate();

  // const from = location.state?.from?.pathname || '/';

  const handleLogin = async (data) => {
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "https://house-hunter-server-phi.vercel.app/api/v1/auth/login",
        data
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/dashboard");
    } catch (err) {
      const errorData = err.response?.data || "An error occurred";
      dispatch({ type: "LOGIN_FAILURE", payload: errorData });
    }
  };
  

  return (
    <div className="h-screen flex justify-center items-center">
         <div className="absolute inset-0 bg-gradient-to-b from-indigo-200 to-white pointer-events-none -z-10" aria-hidden="true" />

      <div className="w-96 p-7 border border-gray-300 rounded-2xl bg-indigo-300">
        <h2 className="text-xl text-center">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-1">Email</label>
            <input
              type="text"
              {...register("email", { required: "Email Address is required" })}
            
              className="border border-gray-300 rounded-md p-2 w-full max-w-xs"
            />
            {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block font-medium mb-1">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
              })}
      
              className="border border-gray-300 rounded-md p-2 w-full max-w-xs"
            />
            <label className="label"> <span className="label-text">Forget Password?</span></label>
            {errors.password && <p className="text-red-600">{errors.password?.message}</p>}
          </div>

          <input
            className="bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 text-white font-semibold py-2 px-4 rounded-lg shadow-md w-full mt-4"
            value="Login"
            type="submit"
          />

          <div>
            {loginError && <p className="text-red-600">{loginError}</p>}
          </div>
        </form>

        <p>You are new here? <Link className="text-gray-500" to="/signup">Create new Account</Link></p>
      </div>
    </div>
  );
};

export default Login;
