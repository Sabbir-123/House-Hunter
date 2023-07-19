import { Link } from 'react-router-dom';
import Button from '../../../Components/Buttons/Button';
import { useContext } from 'react';
import { AuthContext } from '../../../Components/Context/AuthContext';

const AuthSide = () => {
  const { user, dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <ul className="flex items-center lg:gap-7 md:gap-5 sm:gap-3 gap-3">
      {user ? (
        <li className="md:text-lg text-primary cursor-pointer">
          <Button
            className="md:text-lg"
            sizeClass="px-[12px] py-[8px]"
            onClick={handleLogout}
          >
            Log Out
          </Button>
        </li>
      ) : (
        <>
          <li>
            <Link to="/login" className="md:text-lg text-primary cursor-pointer">
              Log in
            </Link>
          </li>
          <li>
            <Link to="/signup" className="cursor-pointer">
              <Button className="md:text-lg" sizeClass="px-[12px] py-[8px]">
                Sign up
              </Button>
            </Link>
          </li>
        </>
      )}
    </ul>
  );
};

export default AuthSide;
