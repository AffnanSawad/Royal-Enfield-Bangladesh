import { useSpring, animated } from "@react-spring/web";
import { Fade } from "react-awesome-reveal";
import { HiLocationMarker } from "react-icons/hi";
const LocateUs = () => {


    const [styles, api] = useSpring(() => ({ opacity: 0 }));



    return (
     
 
<div >
 
<Fade duration={2000}>
<h1 className="text-3xl italic font-bold text-white text-center underline mt-20">Locate Us In Bangladesh !</h1>
</Fade>


<Fade duration={5000}>
<div className="location_container   lg:flex gap-5 py-10 ">
        

       


        {/* 1 */}
           <div
     className="relative w-5/6   overflow-hidden rounded-lg shadow-lg lg: h-1/4"
     onMouseEnter={() => api.start({ opacity: 1 })}
     onMouseLeave={() => api.start({ opacity: 0 })}
   >
     <img
       src="https://i.ibb.co.com/T01Lx5m/olga-subach-Zuxxq0i-Hk-N4-unsplash.jpg"
       alt="Card"
       className="w-full h-full object-cover "
     />
     <animated.div
       style={styles}
       className="absolute inset-0 bg-black bg-opacity-70 text-white flex flex-col justify-center items-center"
     >
       <h3 className="text-lg font-bold text-red-400 italic">Royal Enfield Chittagong</h3>
       <div className="flex gap-1">
       <HiLocationMarker />
       <p className="text-sm italic">   132,Fazlul kader Road , GEC Circle</p>
       </div>
     </animated.div>
   </div>


{/* 2 */}
   <div
     className="relative  h-1/3  w-5/6  overflow-hidden rounded-lg shadow-lg"
     onMouseEnter={() => api.start({ opacity: 1 })}
     onMouseLeave={() => api.start({ opacity: 0 })}
   >
     <img
       src="https://i.ibb.co.com/jfvLgBg/park-city.jpg" 
       alt="Card"
       className="w-full h-full object-cover"
     />
     <animated.div
       style={styles}
       className="absolute inset-0 bg-black bg-opacity-70 text-white flex flex-col justify-center items-center"
     >
       <h3 className="text-lg font-bold text-red-400 italic">Royal Enfield Dhaka</h3>
       <div className="flex gap-1">
       <HiLocationMarker /> 
       <p className="text-sm italic"> Dhanmondi 2/A , Dhaka </p>
       </div>
     </animated.div>
   </div>








   


  
   
   


       </div>
</Fade>


</div>



      
    );
};

export default LocateUs;