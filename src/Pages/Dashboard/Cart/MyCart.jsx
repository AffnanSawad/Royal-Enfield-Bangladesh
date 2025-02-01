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
      <div className="p-5">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-5">
        <h1 className="text-3xl md:text-4xl font-bold italic">Booked Bikes: {cart.length}</h1>
        <h1 className="text-3xl md:text-4xl font-bold italic">Total Price: ${totalPrice}</h1>
      </div>

      {/* Bikes List */}
      <div className="list mt-5 overflow-x-auto">
        <table className="table-auto w-full text-left border-collapse">
          <tbody className="mt-5">
            {cart.map((item) => (
              <tr key={item._id} className="border-b border-gray-700">
                {/* Serial Number */}
                <td className="px-4 py-3 text-lg font-bold italic"> * </td>

                {/* Bike Image */}
                <td className="px-4 py-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={item.photo} alt="Bike" />
                    </div>
                  </div>
                </td>

                {/* Bike Name */}
                <td className="px-4 py-3 text-lg font-bold italic"> - {item.name} </td>

                {/* Bike Price */}
                <td className="px-4 py-3 text-lg font-bold italic"> - Price: ${item.price} </td>

                {/* Delete Button */}
                <td className="px-4 py-3">
                  <button
                    className="btn btn-ghost btn-lg hover:text-red-500"
                    onClick={() => handle_delete(item._id)}
                  >
                    <AiFillDelete className="text-red-700 text-xl" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default MyCart;