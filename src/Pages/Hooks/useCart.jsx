import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../FireBaseAuthentication/AuthProvider/AuthProvider";
import axios from "axios";


const useCart = () => {
  
    // To Load Data on the Cart TanStack Query Is Used .

    const { user } = useContext(AuthContext);

    const { data : cart = [ ] , refetch} = useQuery({
      
        queryKey: [  'cart ' , user?.email  ] ,
         
        queryFn : async ()=> {
       
            const result = await axios.get(`http://localhost:5000/carts?email=${user.email}`)
      

            return result.data;
    
        }

    })

      
    return [ cart , refetch];

  



};

export default useCart;