import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Pages/Hooks/useCart";


const Dashboard = () => {

  
    const [cart] = useCart();



    return (
         

        <div className="flex flex-col lg:flex-row">
      
        {/* Sidebar */}
        <div className="lg:w-64 w-full min-h-screen bg-red-400 p-4 h-1/2 lg:h-full">
  
          {/* Sidebar Menu */}
          <ul className="menu font-bold text-white space-y-4">
            <div className="divider"></div>
  
            <li>
              <NavLink to="/" className="text-lg">
                Home
              </NavLink>
            </li>
  
            <li>
              <NavLink to="/dashboard/mycart" className="text-lg">
                Booking ({cart.length})
              </NavLink>
            </li>
  
            <li>
              <NavLink to="/bikes" className="text-lg">
                Bike
              </NavLink>
            </li>
  
            <li>
              <NavLink to="/support" className="text-lg">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
  
        {/* Main Content */}
        <div className="flex-1 bg-white p-8">
          {/* Outlet renders dynamic content here */}
          <Outlet />
        </div>
      </div>



    );
};

export default Dashboard;