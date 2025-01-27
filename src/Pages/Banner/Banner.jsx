import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Banner = () => {

    
       
        
    return (
        <Carousel className=" bg-black">

         <div>
            <img src="https://i.ibb.co.com/LZsdNmX/end-of-season-desktop-banner.png" />
        </div>
           
        <div>
            <img src="https://i.ibb.co.com/wrcgqfs/Royal-Enfield-BP-Big-Banner-2-Desk-royalenfieldbullet350militaryred-PDP-TW.jpg" />
        </div>
        
       
        <div>
            <img src="https://i.ibb.co.com/9y2Ftj1/sleethblack-banner-des.jpg"  alt="" />
        </div>
        
    </Carousel>
    );
};

export default Banner;