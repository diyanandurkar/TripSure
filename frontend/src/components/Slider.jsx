import React from 'react'
import bg3 from "../../public/bg3.jpeg"
import banner1 from "../../public/banner1.jpeg"
import banner2 from "../../public/banner2.jpg"
import banner3 from "../../public/banner3.jpg"

// export default function Slider() {
//     return (

//         <>


//             <div className='max-w-screen-xl w-full h-40 md:h-80  container mx-auto md:px-20 px-4 md:mt-0 flex z-0 '>
//                 <div className=" mt-28 md:mt-28 carousel w-full h-full max-h-screen-sm ">
//                     <div id="slide1" className=" carousel-item relative w-full">
//                         <img
//                             src={banner1}
//                             className="w-full" />
//                         <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//                             <a href="#slide4" className="btn btn-circle">❮</a>
//                             <a href="#slide2" className="btn btn-circle">❯</a>
//                         </div>
//                     </div>
//                     <div id="slide2" className="carousel-item relative w-full">
//                         <img
//                             src={banner1}
//                             className="w-full" />
//                         <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//                             <a href="#slide1" className="btn btn-circle">❮</a>
//                             <a href="#slide3" className="btn btn-circle">❯</a>
//                         </div>
//                     </div>
//                     <div id="slide3" className="carousel-item relative w-full">
//                         <img
//                             src={banner1}
//                             className="w-full" />
//                         <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//                             <a href="#slide2" className="btn btn-circle">❮</a>
//                             <a href="#slide4" className="btn btn-circle">❯</a>
//                         </div>
//                     </div>
//                     <div id="slide4" className="carousel-item relative w-full">
//                         <img
//                             src={banner1}
//                             className="w-full" />
//                         <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//                             <a href="#slide3" className="btn btn-circle">❮</a>
//                             <a href="#slide1" className="btn btn-circle">❯</a>
//                         </div>
//                     </div>
//                 </div>




//                 {/* another components */}
// {/* 
//                 <div className="hero bg-base-200 min-h-screen">
//                     <div className="hero-content text-center">
//                         <div className="max-w-md">
//                             <h1 className="text-5xl font-bold">Hello there</h1>
//                             <p className="py-6">
//                                 Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
//                                 quasi. In deleniti eaque aut repudiandae et a id nisi.
//                             </p>
//                             <button className="btn btn-primary">Get Started</button>
//                         </div>
//                     </div>
//                 </div> */}

//             </div>


//         </>
//     )
// }

import { useState, useEffect } from 'react';

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(1); // Tracks the current slide

  // Function to navigate between slides
  const goToSlide = (slideNumber) => {
    const slide = document.getElementById(`slide${slideNumber}`);
    if (slide) {
      slide.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Automatically slide every 3 seconds (3000ms)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => {
        const nextSlide = prevSlide === 4 ? 1 : prevSlide + 1; // Loop back to the first slide after the last one
        goToSlide(nextSlide);
        return nextSlide;
      });
    }, 3000); // 3-second interval

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <>
      <div className="max-w-screen-xl w-full h-40 md:h-80 container mx-auto md:px-20 px-4 md:mt-0 flex z-0 ">
        <div className="mt-28 md:mt-28 carousel w-full h-full max-h-screen-sm">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={banner1} className="w-full" alt="Slide 1" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
             
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={banner1} className="w-full" alt="Slide 2" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={banner1} className="w-full" alt="Slide 3" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src={banner1} className="w-full" alt="Slide 4" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

