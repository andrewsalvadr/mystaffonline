import React from 'react'
import Signup1 from '../Assets/latestsignup1.png'
import Signup2 from '../Assets/latestsignup2.png'
import 'swiper/css/autoplay'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from "swiper/react";
import {  A11y, Autoplay} from 'swiper';
import Testimonial1 from '../Assets/testimonial1.png'
import Testimonial2 from '../Assets/testimonial2.png'
import Testimonial3 from '../Assets/testimonial3.png'
import FiveStars from '../Assets/fivestars.png'


function FeedbackPage() {
  return (
      <>

      {/* Latest Candidates Swiper */}
    <div className='m-20'>
        <h1 className='text-blue-900 font-semibold mb-9 lg:text-2xl'>Our Latest Signups</h1>
        <div className='lg:ml-36'>
        <Swiper
      // install Swiper modules
      modules={[ A11y, Autoplay]}
      slidesPerView={1}
      autoplay={{ delay: 5000 }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
      <img src={Signup1} alt="candidates"/>
        </SwiperSlide>
      <SwiperSlide>
      <img src={Signup2} alt="candidates"/>
        </SwiperSlide>
    </Swiper>
    </div>
    </div>

    <div className='bg-blue-900 rounded-r-full p-12 mb-9'>
        <h1 className='lg:text-2xl text-white font-semibold'>What other say for us?</h1>
    
    <div>


  <div className='m-10 mb-9 lg:flex lg:justify-center'>


  <div className='m-10 mb-9 flex justify-center gap-16'>
            {/* <    <!-- testimonial 1--> */}
                <div className="bg-white w-40 p-4 border-2 border-blue-900 rounded-tl-3xl rounded-br-3xl shadow-2xl">
                    <p className='text-blue-900 mb-2 text-xs lg:text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>

                  <div className="h-12 w-12 lg:flex justify-start mt-5">
                    <img className="w-full h-full rounded-full shadow-inner" src={Testimonial1}
                      alt="A smiling man."/>
                    <span className="block text-xs lg:text-sm font-bold mt-2 tracking-wider text-blue-900 lg:ml-2">Shaina Gomez</span>
                  </div>
                  <div className="ml-4 mt-12 mr-6 lg:mt-3 ">
                    <img src={FiveStars} alt="stars"/>
                  </div>
                </div>

            {/* <    <!-- testimonial 2--> */}
            <div className="bg-white w-40 p-4 border-2 border-blue-900 rounded-tl-3xl rounded-br-3xl shadow-2xl">
                    <p className='text-blue-900 mb-2 text-xs lg:text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>

                  <div className="h-12 w-12 lg:flex justify-start mt-5">
                    <img className="w-full h-full rounded-full shadow-inner" src={Testimonial2}
                      alt="A smiling man."/>
                    <span className="block text-xs lg:text-sm font-bold mt-2 tracking-wider text-blue-900 lg:ml-2">Freddie Wong</span>
                  </div>
                  <div className="ml-4 mt-12 mr-6 lg:mt-3">
                    <img src={FiveStars} alt="stars"/>
                  </div>
                </div>
</div>
    


<div className='m-10 mb-9 flex justify-center gap-16'>
            {/* <    <!-- testimonial 3--> */}
            <div className="bg-white w-40 p-4 border-2 border-blue-900 rounded-tl-3xl rounded-br-3xl shadow-2xl">
                    <p className='text-blue-900 mb-2 text-xs lg:text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>

                  <div className="h-12 w-12 lg:flex justify-start mt-5">
                    <img className="w-full h-full rounded-full shadow-inner" src={Testimonial3}
                      alt="A smiling man."/>
                    <span className="block text-xs lg:text-sm font-bold mt-2 tracking-wider text-blue-900 lg:ml-2">Michelle Legaspi</span>
                  </div>
                  <div className="ml-4 mt-12 mr-6 lg:mt-3 ">
                    <img src={FiveStars} alt="stars"/>
                  </div>
                </div>

            {/* <    <!-- testimonial 4--> */}
            <div className="bg-white w-40 p-4 border-2 border-blue-900 rounded-tl-3xl rounded-br-3xl shadow-2xl">
                    <p className='text-blue-900 mb-2 text-xs lg:text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>

                  <div className="h-12 w-12 lg:flex justify-start mt-5">
                    <img className="w-full h-full rounded-full shadow-inner" src={Testimonial1}
                      alt="A smiling man."/>
                    <span className="block text-xs lg:text-sm font-bold mt-2 tracking-wider text-blue-900 lg:ml-2">Carla Estrella</span>
                  </div>
                  <div className="ml-4 mt-12 mr-6 lg:mt-3 ">
                    <img src={FiveStars} alt="stars"/>
                  </div>
                </div>
</div>
      </div>
      </div>

      


      </div>







    </>

  )
}

export default FeedbackPage