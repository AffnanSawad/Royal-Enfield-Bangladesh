import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Pages/Hooks/useCart";


const Dashboard = () => {

  
    const [cart] = useCart();



    return (
         

        <div className="flex">
        
        
        
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-red-600">
               
                <ul className="menu p-4 font-bold ">
                  
                         {/* shared */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            
                            Home</NavLink>
                    </li>

                
                    <li>
                       
                           
                            Booking( {cart.length} ) 
                    </li>




                    <li>
                        <NavLink to="/bikes">
                           
                            Bike</NavLink>
                    </li>
                    <li>
                        <NavLink to="/support">
                            
                            Contact</NavLink>
                    </li>
                </ul>
            </div>
           
           
            {/* dashboard content */}
                     
            <div className="flex-1 p-8 bg-white">
              
              
              
                <Outlet></Outlet>

            {/* <h1 className=" text-2xl font-bold italic"> Here Is Your Booked Bikes ! </h1> */}


            </div>
        </div>



    );
};

export default Dashboard;