import React, { useEffect } from 'react'
import list from '../../../public/list.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Product from '../Product';
import car from '../../../public/car.jpg';
import axios from  'axios';
import { useState } from 'react';


function Pb(item) {
  const [trip,setTrip]=useState([])
  useEffect(()=>{
    const getbook= async()=>{
      try {
        const res = await axios.get("http://localhost:4002/trip");
        
        const data = list.filter((data) => data.p_type === "bestdeal");
        console.log(res.data);
        setTrip(data);
      } catch (error) {
        console.log(error)
      }
    }
    getbook();
  })

  console.log(item)
  const filterData = list.filter((data) => data.p_type === "bestdeal");
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
};
  
  
  return (
    
    <div className='max-w-screen-2xl container mx-0 md:px-20 px-4 '>
                <div className="scale-50 md:scale-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 container">
                      
                        {trip.map((item) => (
                            <Product  key={item.p_id} item={item}/>
                        ))}
                  
                </div>

    </div>

  )
}

export default Pb