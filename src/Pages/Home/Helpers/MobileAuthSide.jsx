/* eslint-disable no-undef */

import { Link } from 'react-router-dom';

const MobileAuthSide = () => {
  

  return (
    <ul className="flex gap-[20px] flex-col">
      {/* {user?.email ? (
        <li className="md:text-lg text-black cursor-pointer font-[500]">
         <button>Log Out</button> 
        </li>
      ) : (
        <>
          <Link to="/login">
            <li className="md:text-lg text-black cursor-pointer font-[500]">
              Log in
            </li>
          </Link>

          <li>
            <Link to="/signup" className="cursor-pointer">
              <button className="border-none outline-none font-[500] text-black">
                Sign up
              </button>
            </Link>
          </li>
        </>
      )} */}
       <Link to="/login">
            <li className="md:text-lg text-black cursor-pointer font-[500]">
              Log in
            </li>
          </Link>

          <li>
            <Link to="/signup" className="cursor-pointer">
              <button className="border-none outline-none font-[500] text-black">
                Sign up
              </button>
            </Link>
          </li>
    </ul>
  );
};


export default MobileAuthSide;
