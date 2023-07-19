import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Components/Context/AuthContext';

const MobileAuthSide = () => {
  const { user, dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('user');
  };

  return (
    <ul className="flex gap-[20px] flex-col">
      {user ? (
        <li className="md:text-lg text-black cursor-pointer font-[500]">
          <button onClick={handleLogout}>Log Out</button>
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
      )}
    </ul>
  );
};

export default MobileAuthSide;
