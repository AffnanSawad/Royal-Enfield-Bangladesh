import { useContext } from "react";
import { Fade } from "react-awesome-reveal";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../FireBaseAuthentication/AuthProvider/AuthProvider";


const BikeDetails = () => {


    
     
    // Card Details
   
    const bikedetailsinfo = useLoaderData();
    
    const {id} = useParams();
    
    const idInt = parseInt(id);

    const bikedetailsinfo2 =bikedetailsinfo.find(bikedetailsinfo2=> bikedetailsinfo2.id == idInt) 



    console.log(bikedetailsinfo2);


   

   


    return (
        <div>
           
           <Fade duration={2000}>

           <h1 className="text-red-500  text-3xl italic font-bold mx-20 pt-10"> * {bikedetailsinfo2.name} *   </h1>

           </Fade>
        
        
        <Fade duration={6000}>
          
        <div className="flex gap-5 justify-center mx-18 mt-10 mb-20">

<img src={bikedetailsinfo2.photo} className="h-[400px]" />

<div className="lg:-mt-2">
  
<h1 className="text-white lg:mt-20"> {bikedetailsinfo2.details}  </h1>

<div className="flex justify-start">

<h1 className="text-white font-bold italic mt-10 "> <span className="text-red-500">Total CC : </span> {bikedetailsinfo2.cc}  </h1>


<h1 className="text-white font-bold italic mt-10 lg:ml-20"> <span className="text-red-500">Price : </span> {bikedetailsinfo2.price}  </h1>



</div>



</div>







 </div>




        </Fade>
        
        
        
        
        
        
        
        </div>
    );
};

export default BikeDetails;