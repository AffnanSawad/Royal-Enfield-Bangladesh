
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';
import { Fade } from 'react-awesome-reveal';

const HomeBikes = () => {
    return (
        <div>

<Fade>

<h1 className='text-red-600 bg-black text-center underline  text-4xl font-bold italic mb-5'>New Arrivals</h1>

</Fade>

<Fade duration={7500}>
 
        <Swiper  
        
        height={700}
          direction={'vertical'}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Pagination]}
          className="mySwiper bg-black"
        >

           
            <SwiperSlide><img src="https://i.ibb.co.com/xHwr9r0/cool-motorcycle-outdoors.jpg" alt="" /></SwiperSlide>
          <SwiperSlide className=' bg-black'><img src="https://i.ibb.co.com/ZYchKJv/motorcycle-safety-helmet.jpg" /></SwiperSlide>
          <SwiperSlide><img src="https://i.ibb.co.com/MhPxCVh/cool-motorcycle-indoors.jpg"  /></SwiperSlide>
          <SwiperSlide><img src="https://i.ibb.co.com/cYTjZ8h/view-cool-motorcycle.jpg" alt="" /></SwiperSlide>
          
          
        </Swiper>

        </Fade>
      </div>
    );
};

export default HomeBikes;