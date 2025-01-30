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
                
              <Link to='/mycart'> 
            
            
            <button className="btn">
            <BsCartCheckFill />   <div className="badge badge-sm badge-secondary">+{cart.length} </div>
             </button>
            
            
             </Link></li>
            


             }



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
       
       {/* Login Button Linked */}

      


       {

user ? <div className="text-white mr-4"> 
  
  {user.email}
   <button onClick={()=>handleLogOut()} className='btn bg-red-600 text-white border border-red-600'>Log Out</button>
    </div> : 

<Link to="login"> 
<button className="btn btn-outline  border-red-600 text-white bg-red-600">Log In</button>
</Link>
}



        </div>
      </div>
    );
};

export default Navbar;