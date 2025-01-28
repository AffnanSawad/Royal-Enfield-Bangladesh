
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
        <div className='h-[500px]'>

<Fade>

<h1 className='text-red-600 bg-black text-center underline  text-4xl font-bold italic mb-5'>Some Glimpses !</h1>

</Fade>

<Fade duration={5000}>
 
        <Swiper  
        
        height={650}
          direction={'vertical'}
          slidesPerView={1}
          spaceBetween={30}
          autoplay={true}
          onAutoplayStart={true}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Pagination]}
          className="mySwiper bg-black"
        >

           
            <SwiperSlide><img src="https://i.ibb.co.com/3YCybFp/safely-motorcycle-helmet.jpg" alt="" /></SwiperSlide>
          <SwiperSlide className=' bg-black'><img src="https://i.ibb.co.com/ZYchKJv/motorcycle-safety-helmet.jpg" /></SwiperSlide>
          <SwiperSlide><img src="https://i.ibb.co.com/J5D75MX/man-cafe-racer-style-motorbike.jpg"  /></SwiperSlide>
          <SwiperSlide><img src="https://i.ibb.co.com/DY1LFQv/motorcycle-safety-helmet-1.jpg" alt="" /></SwiperSlide>
          
          
        </Swiper>

        </Fade>
      </div>
    );
};

export default HomeBikes;