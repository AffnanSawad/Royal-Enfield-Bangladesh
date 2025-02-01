import { Fade } from "react-awesome-reveal";


const Acc = () => {
    return (
        <Fade duration={2000}>
        <div className="container mx-auto px-4">
          {/* 1st Item */}
          <div className="engine-guard grid grid-cols-1 sm:grid-cols-2 gap-6 items-center mt-10">
            <div className="engine-pic rounded-3xl">
              <img className="w-full h-auto max-h-96 object-cover rounded-3xl" 
                   src="https://i.ibb.co.com/VvYpHk9/motorcycle-luxury-items-close-up-motorcycle-parts.jpg" 
                   alt="Engine Guard" />
            </div>
            <div>
              <h1 className="text-white text-center sm:text-left">
                Protects the engine and vital components in case of a fall or collision. Available in various designs like stainless steel, matte black, and powder-coated finishes. Essential for off-road trips or rugged terrain, providing durability and style.
              </h1>
            </div>
          </div>
      
          {/* 2nd Item */}
          <div className="engine-guard grid grid-cols-1 sm:grid-cols-2 gap-6 items-center mt-10">
            <div>
              <h1 className="text-white text-center sm:text-left">
                High-quality leather or fabric bags designed to fit securely on the bike’s sides. Offers ample storage for essentials during long rides. Perfect for touring enthusiasts who need convenient and stylish luggage solutions.
              </h1>
            </div>
            <div className="engine-pic rounded-3xl">
              <img className="w-full h-auto max-h-96 object-cover rounded-3xl" 
                   src="https://i.ibb.co.com/mRJ00Pq/luggage-for-royal-enfield-classic-500.jpg" 
                   alt="Luggage" />
            </div>
          </div>
      
          {/* 3rd Item */}
          <div className="engine-guard grid grid-cols-1 sm:grid-cols-2 gap-6 items-center mt-10">
            <div className="engine-pic rounded-3xl">
              <img className="w-full h-auto max-h-96 object-cover rounded-3xl" 
                   src="https://i.ibb.co.com/0ZC4YQP/images-4.jpg" 
                   alt="Windshield" />
            </div>
            <div>
              <h1 className="text-white text-center sm:text-left">
                A transparent or tinted screen mounted on the front to deflect wind, dust, and debris. Enhances rider comfort on long rides by reducing wind resistance.
              </h1>
            </div>
          </div>
      
          {/* 4th Item */}
          <div className="engine-guard grid grid-cols-1 sm:grid-cols-2 gap-6 items-center mt-10">
            <div>
              <h1 className="text-white text-center sm:text-left">
                Bright and energy-efficient headlights with better illumination than standard halogen lights. Improves visibility during night rides or in foggy conditions, ensuring safety.
              </h1>
            </div>
            <div className="engine-pic rounded-3xl">
              <img className="w-full h-auto max-h-96 object-cover rounded-3xl" 
                   src="https://i.ibb.co.com/X2JzyqT/images-5.jpg" 
                   alt="Headlights" />
            </div>
          </div>
      
          {/* 5th Item */}
          <div className="engine-guard grid grid-cols-1 sm:grid-cols-2 gap-6 items-center mt-10">
            <div className="engine-pic rounded-3xl">
              <img className="w-full h-auto max-h-96 object-cover rounded-3xl" 
                   src="https://i.ibb.co.com/bNLnP4T/images-6.jpg" 
                   alt="Auxiliary Lights" />
            </div>
            <div>
              <h1 className="text-white text-center sm:text-left">
                Auxiliary lights are additional lighting fixtures mounted on a motorcycle to enhance visibility and illumination. They are typically LED-based, making them energy-efficient and durable. These lights provide extra brightness to illuminate dark roads, especially during night rides or in foggy and rainy conditions.
              </h1>
            </div>
          </div>
        </div>
      </Fade>
      
    );
};

export default Acc;