import { AiFillDelete } from "react-icons/ai";

import useCart from "../../Hooks/useCart";
import Swal from "sweetalert2";
import axios from "axios";


const MyCart = () => {
 

    const [cart,refetch] = useCart();

  // price count
    const totalPrice = cart.reduce((total, perbike) => total + perbike.price, 0);



    //  handle delete item

    const handle_delete = id =>{

      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            

          // delete by axios : link from server
        axios.delete(`http://localhost:5000/carts/${id}`)
       
        .then(res=>{

        if(res.data.deletedCount>0){


          refetch()
          
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
     

        }
           
        })


        }
      });





    }
    



    return (
        <div>
        
        <div className="flex justify-between">
        <h1 className="text-4xl "> Booked Bikes : {cart.length} </h1>
        <h1 className="text-4xl "> Total Price :  $ {totalPrice} </h1>
        </div>
      

      {/* list */}
      <div className="list mt-10 overflow-x-auto ">
            

   




          {/* map */}
  
              <tbody className="lg:mt-20">


              {
        cart.map( item => 
             
            <table key={item.id}
             className="table  font-bold italic">
              {/* head */}
                {/* row 1 */}
                <tr>
                  <th>  * </th>
               
  
                  <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src= {item.photo}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>



                  <td> - {item.name} </td>
                  
                  <td className="pr-20">- Price : ${item.price} </td>


                  <th>
                  <button className="btn btn-ghost  btn-lg">  
                    
                  <AiFillDelete
                   
                   onClick={()=> handle_delete(item._id)}
                   
                  className="text-red-700" />
                    
                     </button>
                </th>



                </tr>


               

                </table>
               
)}
              </tbody>
            
           
      



      </div>






        </div>
    );
};

export default MyCart;