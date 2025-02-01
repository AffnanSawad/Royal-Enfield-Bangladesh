import { useSpring, animated } from "@react-spring/web";
import { Fade } from "react-awesome-reveal";
import { HiLocationMarker } from "react-icons/hi";
const LocateUs = () => {


    const [styles, api] = useSpring(() => ({ opacity: 0 }));



    return (
     
 

  
          <div className="container mx-auto px-4">
            {/* Title */}
            <Fade duration={2000}>
              <h1 className="text-3xl italic font-bold text-white text-center underline mt-10 sm:mt-20">
                Locate Us In Bangladesh!
              </h1>
            </Fade>
      
            {/* Location Cards */}
            <Fade duration={5000}>
              <div className="location_container grid grid-cols-1 sm:grid-cols-2 gap-6 items-center py-10">
                {/* Location 1: Chittagong */}
                <div
                  className="relative w-full mx-auto sm:w-5/6 overflow-hidden rounded-lg shadow-lg"
                  onMouseEnter={() => api.start({ opacity: 1 })}
                  onMouseLeave={() => api.start({ opacity: 0 })}
                >
                  <img
                    src="https://i.ibb.co.com/T01Lx5m/olga-subach-Zuxxq0i-Hk-N4-unsplash.jpg"
                    alt="Royal Enfield Chittagong"
                    className="w-full h-72 sm:h-96 object-cover rounded-lg"
                  />
                  <animated.div
                    style={styles}
                    className="absolute inset-0 bg-black bg-opacity-70 text-white flex flex-col justify-center items-center"
                  >
                    <h3 className="text-lg font-bold text-red-400 italic">
                      Royal Enfield Chittagong
                    </h3>
                    <div className="flex gap-1 items-center">
                      <HiLocationMarker />
                      <p className="text-sm italic">132, Fazlul Kader Road, GEC Circle</p>
                    </div>
                  </animated.div>
                </div>
      
                {/* Location 2: Dhaka */}
                <div
                  className="relative w-full mx-auto sm:w-5/6 overflow-hidden rounded-lg shadow-lg"
                  onMouseEnter={() => api.start({ opacity: 1 })}
                  onMouseLeave={() => api.start({ opacity: 0 })}
                >
                  <img
                    src="https://i.ibb.co.com/jfvLgBg/park-city.jpg"
                    alt="Royal Enfield Dhaka"
                    className="w-full h-72 sm:h-96 object-cover rounded-lg"
                  />
                  <animated.div
                    style={styles}
                    className="absolute inset-0 bg-black bg-opacity-70 text-white flex flex-col justify-center items-center"
                  >
                    <h3 className="text-lg font-bold text-red-400 italic">
                      Royal Enfield Dhaka
                    </h3>
                    <div className="flex gap-1 items-center">
                      <HiLocationMarker />
                      <p className="text-sm italic">Dhanmondi 2/A, Dhaka</p>
                    </div>
                  </animated.div>
                </div>
              </div>
            </Fade>
          </div>
        );
      };
      
      
      



      

export default LocateUs;