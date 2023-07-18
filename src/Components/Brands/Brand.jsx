import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
const Brand = () => {
  return (
    <Link to="/">
      <div className="max-w-[140px]">
        <img src={logo} width={40} height={40} alt="brand" />
      </div>
    </Link>
  );
};

export default Brand;
