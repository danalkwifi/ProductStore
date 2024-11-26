import { Link } from "react-router-dom";
import { FaPlusSquare } from "react-icons/fa";


const Navbar = () => {
  

  return (
    <div className="container mx-auto px-4 max-w-[1140px]">
      <div className="flex flex-col sm:flex-row items-center justify-between h-16">
        {/* Logo / Title */}
        <h1 className="text-2xl sm:text-3xl font-bold uppercase text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          <Link to="/">Product Store 🛒</Link>
        </h1>

        {/* Navigation Buttons */}
        <div className="flex items-center space-x-4 mt-4 sm:mt-0">
          <Link to="/create">
            <button className="p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg">
              <FaPlusSquare className="text-xl" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
