

// import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import  { List } from "react-content-loader";
import { useContext } from "react";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {

 
    const {loading,user} = useContext(AuthContext);

  

    if(loading){

        return <List></List>
    }

    if(user){

        return children;
    }

    return <Navigate   to="/login" ></Navigate>


    


    
};

export default PrivateRoute;