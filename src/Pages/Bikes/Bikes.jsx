import { useEffect, useState } from "react";
import BikesCard from "../BikesCartd/BikesCard";
import { Fade } from "react-awesome-reveal";


const Bikes = () => {

   const [bikeCollection , setBikeCollection] = useState([]);

    //    fetching data  : Server site | Database theke
 
     useEffect(   
    
    ()=>{
     
        fetch('http://localhost:5000/bikesData')

        .then(res => res.json())

        .then(data=> setBikeCollection(data));


    }
      
    ,[])



    return (
        <div>
            {/* <h1 className="text-white text-center"> Total Bikes : {bikes.length} </h1> */}

            <Fade duration={2000}>

            
            <div className="locateushome-heading">
              <h1 className="text-red-600 italic m-5 text-2xl font-bold bg-black underline text-center"> Choose Your Favourite One ! </h1>
              </div>


            </Fade>


        {/* mapping */}
        <Fade duration = {6000} >

    <div className=" grid gap-20 pt-10 ml-10 pb-10 md:grid-cols-2  lg:grid-cols-3 ">


        {
         
        bikeCollection.map( bike => <BikesCard key={bike.id} bike={bike} ></BikesCard>  )

        }

  



    </div>
     


        </Fade>




        </div>
    );
};

export default Bikes;