
import { Fade } from "react-awesome-reveal";
import { useLoaderData, useParams } from "react-router-dom";



const BikeDetails = () => {


    
     
    // Card Details
   
    const bikedetailsinfo = useLoaderData();
    
    const {id} = useParams();
    
    const idInt = parseInt(id);

    const bikedetailsinfo2 =bikedetailsinfo.find(bikedetailsinfo2=> bikedetailsinfo2.id == idInt) 



    console.log(bikedetailsinfo2);


   

   


    return (
        <div className="container mx-auto px-4">
        {/* Title */}
        <Fade duration={2000}>
          <h1 className="text-red-500 text-3xl italic font-bold text-center pt-10">
            * {bikedetailsinfo2.name} *
          </h1>
        </Fade>
  
        {/* Bike Details */}
        <Fade duration={6000}>
          <div className="flex flex-col lg:flex-row gap-5 justify-center items-center mt-10 mb-20">
            {/* Bike Image */}
            <img
              src={bikedetailsinfo2.photo}
              alt="Bike"
              className="w-full max-w-[400px] rounded-lg shadow-lg"
            />
  
            {/* Bike Description */}
            <div className="text-center lg:text-left lg:-mt-2 max-w-xl">
              <h1 className="text-white lg:mt-10">{bikedetailsinfo2.details}</h1>
  
              {/* CC & Price */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-6">
                <h1 className="text-white font-bold italic">
                  <span className="text-red-500">Total CC: </span> {bikedetailsinfo2.cc}
                </h1>
  
                <h1 className="text-white font-bold italic">
                  <span className="text-red-500">Price: </span> {bikedetailsinfo2.price}
                </h1>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
};

export default BikeDetails;