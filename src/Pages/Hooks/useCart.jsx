import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../FireBaseAuthentication/AuthProvider/AuthProvider";


const useCart = () => {
     

    // every user has different card . so u need to verify user
    // refetch is used to count automatically in the dashboard without loading

    const {user} = useContext(AuthContext);
   
    const {data : cart = [] , refetch} = useQuery( {

        
        queryKey: ['cart', user?.email],
        
        
        queryFn: async()=>{
          
            const result = await axios.get(`http://localhost:5000/carts?email=${user.email}`);

           return  result.data;
            
        }


    })

    return [cart,refetch];

};

export default useCart;