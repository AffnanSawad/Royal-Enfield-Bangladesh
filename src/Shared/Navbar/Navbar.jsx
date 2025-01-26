import { Link } from "react-router-dom";

const Navbar = () => {




// navbar options
const navoptions = <>


              
              <li> <Link to='/'>Home</Link></li>

              <li><Link to='/acc'>Accesories</Link></li>

              <li><Link to='/locate'> Locate Us </Link></li>

              <li><Link to='/spp'> Support </Link></li>



</>







    return (
        <div className="navbar font-sans bg-black shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 text-white shadow">
             {navoptions}
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl italic font-bold text-red-600">Royal Enfield </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">
          {navoptions}
          </ul>
        </div>
        <div className="navbar-end">
        <button className="btn btn-outline  border-red-600 text-white bg-red-600">Log In</button>
        </div>
      </div>
    );
};

export default Navbar;