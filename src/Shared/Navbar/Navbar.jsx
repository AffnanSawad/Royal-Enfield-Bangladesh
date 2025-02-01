import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../FireBaseAuthentication/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { auth } from "../../FireBaseAuthentication/FireBase/FireBase.config";
import { BsCartCheckFill } from "react-icons/bs";
import useCart from "../../Pages/Hooks/useCart";





const Navbar = () => {


  // importing context for authentication so that i can use logout;

  const {user , logout} = useContext(AuthContext);

  const [cart] = useCart();


  // navigate
  const navigate = useNavigate();


  const handleLogOut = ()=> {

    logout(auth)
    .then(() => {

        console.log("log out successfully");

        // navigate
        navigate('/');
        
        // swal
        Swal.fire({
          title: "  Logged Out!",
          text: "You Are Successfully Logged Out!",
          icon: "success"
        });
    })

    .catch(error=>{
        console.log(error.message)
    })
  }




// navbar options
const navoptions = <>


              
              <li> <Link to='/'>Home</Link></li>

              <li><Link to='/acc'>Accesories</Link></li>

              <li><Link to='/locate'> Locate Us </Link></li>

              <li><Link to='/support'> Support </Link></li>
              
              <li><Link to='/bikes'> Bikes </Link></li>
             
             
             {
              user &&

              <li> 
                
              <Link to='/dashboard/mycart'> 
            
            
            <button className="btn">
            <BsCartCheckFill />   <div className="badge badge-sm badge-secondary">+{cart.length} </div>
             </button>
            
            
             </Link></li>
            


             }



</>







    return (
      <div className="navbar font-sans bg-black shadow-sm w-full px-4 lg:px-8">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content drop-shadow-2xl rounded-box z-50 mt-3 w-52 p-2 text-white shadow bg-gray-900"
          >
            {navoptions}
          </ul>
        </div>

        {/* Logo */}
        <a className="btn btn-ghost text-2xl lg:text-3xl italic font-bold text-red-600">
          Royal Enfield
        </a>
      </div>

      {/* Navbar Center (Hidden on Mobile) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white">{navoptions}</ul>
      </div>

      {/* Navbar End (User Section) */}
      <div className="navbar-end ml-auto lg:ml-2">
        {/* Authentication Section */}
        {user ? (
          <div className="flex items-center text-white">
            <p className="hidden sm:block mr-4">{user.email}</p>
            <button
              onClick={handleLogOut}
              className="btn bg-red-600 text-white border border-red-600 hover:bg-red-700"
            >
              Log Out
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn btn-outline border-red-600 text-white bg-red-600 hover:bg-red-700">
              Log In
            </button>
          </Link>
        )}
      </div>
    </div>
    );
};

export default Navbar;