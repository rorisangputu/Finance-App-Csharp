
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';



const Navbar = () => {
  return (
    <nav className="relative w-[90%] md:w-[80%] mx-auto py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <Link to={'/'}>
            <img src={logo} alt="" />
          </Link>
          <div className="hidden font-bold lg:flex">
            <Link to="/search" className="text-black hover:text-blue-800">
              Search
            </Link>
          </div>
        </div>
        <div className="hidden lg:flex items-center space-x-6 text-back">
          <div className="hover:text-blue-800">Login</div>
          <a
            href=""
            className="px-8 py-3 font-bold rounded text-white bg-green-500 hover:opacity-70"
          >
            Signup
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;