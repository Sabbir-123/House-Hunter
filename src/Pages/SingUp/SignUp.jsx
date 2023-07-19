import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import SignUpPic from '../../assets/images/SignUp.svg';
import Illustration from '../../assets/images/hero-illustration.svg';

export default function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [signUpError, setSignUpError] = useState('');
//   const navigate = useNavigate();

  const handleSignUp = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-wrap w-full">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-200 to-white pointer-events-none -z-10" aria-hidden="true" />

      {/* Illustration */}
      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
        <img src={Illustration} className="max-w-none" alt="Hero Illustration" />
      </div>

      <div className="flex flex-col w-full md:w-1/2">
        <div className="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
          <div className="h-[800px] flex justify-center items-center">
            <div className="w-[450px] p-7 rounded-lg border bg-indigo-300">
              <p className="text-3xl text-center">Sign Up</p>

              <form onSubmit={handleSubmit(handleSignUp)}>
                <div className="mb-4">
                  <label htmlFor="name" className="block font-medium mb-1">Full Name</label>
                  <input
                    type="text"
                    {...register("name", { required: "Name is Required" })}
                    className="border border-gray-300 rounded-md p-2 w-full"
                  />
                  {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                </div>

                <div className="mb-4">
                  <label htmlFor="role" className="block font-medium mb-1">Are You a House Owner or a Renter?</label>
                  <select className="border border-gray-300 rounded-md p-2 w-full" {...register("role")}>
                    <option value="owner">House Owner</option>
                    <option value="renter">House Renter</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label htmlFor="phoneNumber" className="block font-medium mb-1">Phone Number</label>
                  <input
                    type="number"
                    {...register("phoneNumber", { required: true })}
                    className="border border-gray-300 rounded-md p-2 w-full"
                  />
                  {errors.phone && <p className="text-red-500">Phone is required</p>}
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block font-medium mb-1">Email</label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    className="border border-gray-300 rounded-md p-2 w-full"
                  />
                  {errors.email && <p className="text-red-500">Email is required</p>}
                </div>

                <div className="mb-4">
                  <label htmlFor="password" className="block font-medium mb-1">Password</label>
                  <input
                    type="password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: { value: 6, message: "Password must be 6 characters long" },
                    })}
                    className="border border-gray-300 rounded-md p-2 w-full"
                  />
                  {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                </div>

                <input
                  className="bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 text-white font-semibold py-2 px-4 rounded-lg shadow-md w-full mt-4"
                  value="Sign Up"
                  type="submit"
                />

                {signUpError && <p className="text-red-600">{signUpError}</p>}
              </form>

              <p>
                Already have an account? <Link className="text-gray-500" to="/login">Please Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-1/2 shadow-2xl rounded-xl bg-[#6366f1] mt-16" >
        <img className="hidden object-cover w-full h-screen md:block" src={SignUpPic} alt="Sign Up Pic" />
      </div>
    </div>
  );
}
