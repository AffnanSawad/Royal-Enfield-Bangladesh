import { Card ,   CardContent, CardMedia,  } from "@mui/material";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";


import ReactiveButton from "reactive-button";
import { AuthContext } from "../../FireBaseAuthentication/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";
import useCart from "../Hooks/useCart";


const BikesCard = ({bike}) => {

  const {id,photo,name,cc,price} = bike;

  const {user} = useContext(AuthContext);

  const navigate = useNavigate();
   
  // for counting - refetch is used
  const [ , refetch] = useCart();


  // add to cart handle function

  const handle_add_to_cart = (bikeInfo)=>{

    if( user && user.email){


      console.log(bikeInfo , user.email);

      // send bike information to the database

      const bikeCartItem = {

        bikeCartId : id ,
        email: user.email,
        photo,
        name,
        price

      }

      // axios use kore selected cart gula database epathano
      axios.post('http://localhost:5000/carts', bikeCartItem)
      .then( result =>{
         console.log(result.data)

         if( result.data.insertedId){
          
          Swal.fire({
            position: "top-right",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });

            //  refetch is used to count automatically in the dashboard without loading //
          refetch();
         }
      })


     
    }
    

    // User na thakle alert dibe : & login page e niye jabe
    else{

      Swal.fire({
        title: "You Are Not Log In !",
        text: "Please Log In First To Booked Bikes!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Log In Now !"
      }).then((result) => {
        if (result.isConfirmed) {
          
          
          navigate('/login');


        }
      });
    }


  }


    return (
        <div >



<Card  hoverable={true} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={photo}
        alt="Bike"
        className=" h-[250px]  "
      />
      <CardContent className="italic  font-bold bg-black text-white ">
        <h1  className="text-xl font-bold"  >
          {name}
        </h1>


        <div className="flex justify-between mt-4">
          
          <h1> CC: {cc}   </h1>
          <h1>Price: {price} </h1>


        </div>

        <div className="flex justify-start ">
        
   
    
    
  <Link to={`/details/${id}`}>
  
  
  
  <ReactiveButton 
        
        className="mt-5 " color="red"
        
        idleText='Show Details' loadingText='loading' animation={true}

        rounded={true} 
      successText="Success"
       
        
        />
  
  
  
  </Link>


  
  
  
  <ReactiveButton 
        
        className="mt-5  ml-5" color="primary"

        onClick={()=> handle_add_to_cart(bike)}
        
        idleText='Book Now ' loadingText='loading' animation={true}

        rounded={true} 
      successText="Success"
       
        
        />
  
  
  



    
    
  


        </div>


       
      </CardContent>
     
    </Card>




        </div>
    );
};

export default BikesCard;

